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
                                    book: book
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
                            location.href=`/admin/books/${book['bID']}`
                        }}>
                            <Label>Update Book</Label>
                        </svelte:component>
                        <Button>
                            <Label>Delete Book</Label>
                        </Button>
                    {/if}
                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>