<script>
    export let book

    let open = true

    import { onMount } from 'svelte';

    let Dialog
    let Title
    let Content
    let Actions

    let Button
    let Label

    // let getUserFromCookie

    onMount(async () => {
        
        // getUserFromCookie = (await import('../scripts/ClientJWT')).getUserFromCookie

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

    import AdminUpdateEntry from './AdminUpdateEntry.svelte';
    function openUpdateBookModal(d) {
        new AdminUpdateEntry({
            target: document.body,
            props: {
                book: d
            },
        })
    }

</script>

<main>
    <!-- bind:open -->
    {#if Dialog}
        <svelte:component this={Dialog} bind:open>
            <Title>Book</Title>
            <Content>
                {#each Object.keys(book) as i}
                    {i}: {book[i]}<br>
                {/each}
            </Content>
            <Actions>
                {#if Button}
                    {#if location.pathname == '/search'}
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
                                    if (res['message'] == 'Book checked out') {
                                        location.reload()
                                    }
                                })
                        }}>
                            <Label>Checkout Book</Label>
                        </svelte:component>
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
                    
                        {/if}
                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>