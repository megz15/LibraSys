<script>
    export let component
    export let data
    export let isLoggedIn
    
    const routes = {
        'Search': Search,
        'About': About,
        'Profile': Profile,
        'Admin': Admin,
        'Home': Home
    }
    
    import Home from "./pages/Home.svelte";
    import Search from "./pages/Search.svelte";
    import About from "./pages/About.svelte";
    import Profile from "./pages/Profile.svelte";
    import Admin from "./pages/Admin.svelte";
    import NavBar from "./components/NavBar.svelte";
</script>

<!-- Uisng conditional rendering according to the route -->
<!-- Edit: using svelte:component instead-->

<svelte:component this={NavBar} isLoggedIn={isLoggedIn}/>
<svelte:component this={routes[component]} data={data}/>

<!-- <Index data = {data}/> -->
<!-- {data} -->