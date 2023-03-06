<script>
    export let book

    let bID = book.bID
    let timeWhenCheckedOut = book.timeWhenCheckedOut

    let days = 7
    let message = 'Custom message!!'

    import { onMount } from 'svelte';

    let Dialog
    let Title
    let Content
    let Actions

    let Button
    let Label

    let Slider

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

        module = await import('@smui/slider');
        Slider = module.default
    });

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>Book</Title>
            <Content>
                Code: {bID}<br>
                Time when checked out: {timeWhenCheckedOut}<br>
                <input bind:value={message} />
                {#if Slider}
                    <Slider
                        bind:value = {days}
                        min={1}
                        max={14}
                        discrete
                    />
                {/if}
            </Content>
            <Actions>
                {#if Button}
                    <svelte:component this={Button} on:click={()=>{
                        fetch('/api/scheduleBook', {method:'POST', body: JSON.stringify({
                            message: message,
                            delay: days,
                            bID: bID,
                            timeWhenCheckedOut: timeWhenCheckedOut
                        }), headers: {
                            'Content-Type': 'application/json'
                        }}) .then(res => res.json())
                            .then(res => console.log(res))
                    }}>
                        <Label>Schedule</Label>
                    </svelte:component>
                <Button>
                    <Label>Close</Label>
                </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>