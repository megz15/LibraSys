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
    <!-- <h1>Hello, {data.fName}!</h1><br>
    {#if data.isAdmin}
        <h1>You're an admin!</h1><br>
    {/if}
    Your details: <pre><code>{JSON.stringify(data, null, 2)}</code></pre> -->

    {#if Dialog}
        <svelte:component this={Dialog} bind:open>
            <Title>Book</Title>
            <Content>{JSON.stringify(book)}</Content>
            <Actions>
                {#if Button}
                    <Button><Label>No</Label></Button>
                    <Button><Label>Yes</Label></Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>