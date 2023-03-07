<script>
    export let text
    export let image
    export let textdir
    // export let id
    // export let frameEnd

    // import { onMount } from 'svelte';

    // let create

    // onMount(async () => {

    //     let module

    //     module = await import('@lottiefiles/lottie-interactivity')
    //     create = module.create

    //     create({
    //         mode: 'scroll',
    //         player: '#'+id,
    //         actions: [{
    //             visibility: [0,0.8],
    //             type: 'seek',
    //             frames: [0, frameEnd],
    //         }],
    //     });
    // });
</script>

<div class="feature">
    {#if textdir=='left'}<span class="text">{text}</span>{/if}
    <!-- <lottie-player id="{id}" src={lottie} style="width:300px; height: 300px;" /> -->
    <img src='{image}' alt='feature' width="300px" height="300px"/>
    {#if textdir=='right'}<span class="text">{text}</span>{/if}
</div>

<style>
    .feature {
        backdrop-filter: blur(5px) brightness(0.4);
        padding: 20px 150px 20px 150px;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
    }

    .text {
        padding-left: 2em;
        padding-right: 2em;
    }
</style>