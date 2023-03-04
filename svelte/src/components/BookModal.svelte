<script>
    export let book

    // let checkedOut = false
    // export let onClose
    let open = true

    // function close() {
    //     open = false;
    //     onClose();
    // }

    // import Dialog, { Title, Content, Actions } from '@smui/dialog';
    // import Button, { Label } from '@smui/button';

    import { onMount } from 'svelte';
    // import { setContext } from 'svelte'
    // import { writable } from 'svelte/store';

    // const context = writable(null);

    // const handleClick = () => {
    //     context.set(checkedOut);
    // };

    // setContext('checkedOut', context);

    let Dialog
    let Title
    let Content
    let Actions

    let Button
    let Label

    let getUserFromCookie

    onMount(async () => {
        
        getUserFromCookie = (await import('../scripts/ClientJWT')).getUserFromCookie

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
                    <svelte:component this={Button} on:click={()=>{
                        fetch('/api/checkoutBook', {method: 'POST', body:
                            JSON.stringify({
                                user: getUserFromCookie(document.cookie),
                                book: book
                            }
                        ), headers: {
                            'Content-Type': 'application/json'
                        }}) .then(res => res.json())
                            .then(res => {
                                if (res['message'] == 'Book checked out') {
                                    location.reload()
                                } // else checkedOut = false
                                // handleClick()
                            })
                    }}>
                        <Label>Checkout Book</Label>
                    </svelte:component>
                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>