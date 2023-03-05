<script>
    export let users

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

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>Users</Title>
            <Content>
                {#each users as user}
                    <svelte:component this={Label} on:click={
                        console.log(user)
                    }>
                        {user.uName}
                    </svelte:component><br>
                {/each}
            </Content>
            <Actions>
                {#if Button}
                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>