<script>
    export let component
    export let data
    
    const routes = {
        'Search': Search,
        'About': About,
        'Profile': Profile,
        'Admin': Admin,
    }
    
    import Search from "./pages/Search.svelte";
    import About from "./pages/About.svelte";
    import Profile from "./pages/Profile.svelte";
    import Admin from "./pages/Admin.svelte";
</script>

<!-- Uisng conditional rendering according to the route -->
<!-- Edit: using svelte:component instead-->

<svelte:component this={routes[component]} data={data}/>

<!-- <Index data = {data}/> -->
<!-- {data} -->