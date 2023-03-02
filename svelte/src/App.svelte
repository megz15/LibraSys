<script>
    export let books
    import Index from "./pages/Index.svelte";
    import About from "./pages/About.svelte";
</script>

{books}
<Index books = {books}/>
<About />