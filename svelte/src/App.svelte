<script>
    export let component
    export let data
    
    const routes = {
        'Index': Index,
        'About': About
    }
    
    import Index from "./pages/Index.svelte";
    import About from "./pages/About.svelte";
</script>

<!-- Uisng conditional rendering according to the route -->
<!-- Edit: using svelte:component instead-->

<svelte:component this={routes[component]} data={data}/>

<!-- <Index data = {data}/> -->
<!-- {data} -->