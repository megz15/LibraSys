<script>
    export let component
    export let data
    import Index from "./pages/Index.svelte";
    import About from "./pages/About.svelte";
</script>

<!-- Uisng conditional rendering according to the route -->
<!-- Edit: using svelte:component instead-->

<svelte:component this={component} data={data}/>

<!-- ^^^ causing error, fix tomorrow -->>

<!-- <Index data = {data}/> -->
<!-- {data} -->