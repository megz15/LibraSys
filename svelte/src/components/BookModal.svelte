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

    onMount(async () => {
        let module
        
        module= await import('@smui/dialog');
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
                    <Button><Label>Checkout Book</Label></Button>
                    <Button><Label>Close</Label></Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>