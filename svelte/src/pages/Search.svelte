<script>
    import Table from "../components/Table.svelte";

    export let data

    let searchedBook   = '',
        searchedGenre  = '',
        searchedAuthor = ''

</script>

<main>
    <h1>LibraSys</h1>

    <input placeholder="Search..." bind:value={searchedBook} />
    <input placeholder="Genre" bind:value={searchedGenre} />
    <input placeholder="Author" bind:value={searchedAuthor} />

    <button on:click={
        () => location.href =
            `/search?book=${searchedBook}&genre=${searchedGenre}&author=${searchedAuthor}`
    }>Search</button>

    <Table data={data} searchTerm={searchedBook}/>
</main>