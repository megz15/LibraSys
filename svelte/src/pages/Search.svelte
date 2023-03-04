<script>
    import Table from "../components/Table.svelte";

    export let data

    let searchedBook = ''
</script>

<main>
    <h1>LibraSys</h1>

    <input
        type="search"
        placeholder="Search..."
        bind:value={searchedBook}
    />

    <button on:click={()=>location.href=`/search?book=${searchedBook}`}>Search</button>

    <Table data={data}/>
</main>