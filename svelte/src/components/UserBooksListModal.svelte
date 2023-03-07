<script>

    export let user
    // console.log(JSON.parse(user.booksBorrowed))

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

    function returnHandler(bID) {
        fetch('/api/updateUserAfterBookReturn', {method: 'POST', body:JSON.stringify({
            uID: user.uID,
            bID: bID
        }), headers: {
            'Content-Type': 'application/json'
        }}) .then(res => res.json())
            .then(res => ()=>{
                console.log(res)
            })

        fetch('/api/returnBook', {method: 'POST', body: JSON.stringify({
            bID: bID
        }), headers: {
            'Content-Type': 'application/json'
        }}) .then(res => res.json())
            .then(res => {
                console.log(res)
                location.reload()
            })

        // fetch('/api/rebuildCache', {method: 'POST', body:
        //     JSON.stringify({
        //         searchTerm: searchTerm
        //     }), headers: {
        //         'Content-Type': 'application/json'
        // }}) .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //         location.reload()
        //     })
    }

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>Books</Title>
            <Content>
                {#if Label}
                    {#each JSON.parse(user.booksBorrowed) as book}
                        <svelte:component this={Label} on:click={
                            ()=>returnHandler(book.bID)
                        }>
                            {book.bID}
                        </svelte:component><br>
                    {/each}
                {/if}
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