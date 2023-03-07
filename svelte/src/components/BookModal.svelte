<script>
    export let searchTerm
    export let book

    import { onMount } from 'svelte';

    let Dialog
    let Title
    let Content
    let Actions

    let Button
    let Label

    onMount(async () => {

        let module
        
        module = await import('@smui/dialog');
        Dialog = module.default
        Title = module.Title
        Content = module.Content
        Actions = module.Actions

        module = await import('@smui/button');
        Button = module.default
        Label = module.Label
    });

    import AdminUpdateBook from './AdminUpdateBook.svelte';
    import ConsoleModal from './ConsoleModal.svelte';
    import UsersListModal from './UsersListModal.svelte';
    
    function openUpdateBookModal(d) {
        new AdminUpdateBook({
            target: document.body,
            props: {
                book: d
            },
        })
    }

    function openReturnBookModal(users, bID) {
        new UsersListModal({
            target: document.body,
            props: {
                users: users,
                bID: bID
            },
        })
    }

    function openConsoleModal(data) {
        new ConsoleModal({
            target: document.body,
            props: {
                data: data
            },
        })
    }

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>Book</Title>
            <Content>
                {#each Object.keys(book) as i}
                    {i}: {book[i]}<br>
                {/each}
            </Content>
            <Actions>
                {#if Button}
                    {#if location.pathname == '/search'}

                        {#if book.borrowCount == book.copyCount}
                            <svelte:component this={Button} on:click={()=>{
                                fetch('/api/subscribe', {method: 'POST', body:
                                    JSON.stringify({
                                        book: book
                                    }
                                ), headers: {
                                    'Content-Type': 'application/json'
                                }}) .then(res => res.json())
                                    .then(res => {
                                        console.log(res)
                                        openConsoleModal(res)
                                    })
                            }}>
                                <Label>Subscribe</Label>
                            </svelte:component>
                        {:else}
                            <svelte:component this={Button} on:click={()=>{
                                fetch('/api/checkoutBook', {method: 'POST', body:
                                    JSON.stringify({
                                        // user: getUserFromCookie(document.cookie),
                                        book: book,
                                        time: Date.now()
                                    }
                                ), headers: {
                                    'Content-Type': 'application/json'
                                }}) .then(res => res.json())
                                    .then(res => {
                                        openConsoleModal(res)
                                        if (res['message'] == 'Book checked out') {
                                            fetch('/api/rebuildCache', {method: 'POST', body:
                                                JSON.stringify({
                                                    searchTerm: searchTerm
                                                }), headers: {
                                                    'Content-Type': 'application/json'
                                            }}) .then(res => res.json())
                                                .then(res => {
                                                    console.log(res)
                                                    location.reload()
                                                })
                                        }
                                    })
                            }}>
                                <Label>Checkout Book</Label>
                            </svelte:component>
                        {/if}
                    {:else if location.pathname == '/admin/books'}
                        
                        <svelte:component this={Button} on:click={()=>{
                            // location.href=`/admin/books/${book['bID']}`
                            openUpdateBookModal(book)
                        }}>
                            <Label>Update Book</Label>
                        </svelte:component>
                        
                        <svelte:component this={Button} on:click={()=>{
                            fetch('/api/deleteBook', {method: 'POST', body: JSON.stringify({
                                bID: book.bID
                            }), headers: {
                                'Content-Type': 'application/json'
                            }}) .then(res => res.json())
                                .then(res => {
                                    console.log(res)
                                    if (res['message'] == `Book ${book.bID} deleted succesfully`){
                                        location.reload()
                                    }
                                })
                        }}>
                            <Label>Delete Book</Label>
                        </svelte:component>

                        <svelte:component this={Button} on:click={()=>{
                            fetch('/api/getUsersWithBook', {method: 'POST', body: JSON.stringify({
                                bID: book.bID
                            }), headers: {
                                'Content-Type': 'application/json'
                            }}) .then(res => res.json())
                                .then(res => {
                                    openReturnBookModal(res['users'], book.bID)
                                })
                        }}>
                            <Label>Return Book</Label>
                        </svelte:component>
                    
                        {/if}
                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>