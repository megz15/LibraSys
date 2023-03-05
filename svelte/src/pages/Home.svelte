<script>
    let searchedBook
</script>

<main>
    <h1>LibraSys</h1>
    <h3>• Where reading meets technology •</h3>
    <input placeholder="Search..." bind:value={searchedBook} />
    <button on:click={
        () => location.href = `/search?book=${searchedBook}`
    }>Search</button>
</main>

<style>

</style>