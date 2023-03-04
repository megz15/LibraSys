<script>
    export let book
    // export let onClose
    let open = true

    // function close() {
    //     open = false;
    //     onClose();
    // }

    // import Dialog, { Title, Content, Actions } from '@smui/dialog';
    // import Button, { Label } from '@smui/button';

    import { onMount } from 'svelte';

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
                            .then(res => console.log(res))
                    }}>
                        <Label>Checkout Book</Label>
                    </svelte:component>
                    <svelte:component this={Button} on:click={()=>open=false}>
                        <Label>Close</Label>
                    </svelte:component>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>