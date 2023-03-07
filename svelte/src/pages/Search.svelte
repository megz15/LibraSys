<script>
    import Table from "../components/Table.svelte";

    export let data

    let searchedBook   = '',
        searchedGenre  = '',
        searchedAuthor = ''

</script>

<div class="hero">
    <h1>LibraSys</h1>

    <div>
        {#each 
            [
                ["Search...", searchedBook  ],
                ["Genre    ", searchedGenre ],
                ["Author   ", searchedAuthor]
            ]
        as e}
            <input
                placeholder="{e[0]}"
                bind:value={e[1]}
            />&nbsp;
        {/each}
        <!-- <input
            placeholder="Search..."
            bind:value={searchedBook}
        />
        <input
            placeholder="Genre"
            bind:value={searchedGenre}
        />
        <input
            placeholder="Author"
            bind:value={searchedAuthor}
        /> -->

        <button on:click={
            () => location.href =
                `/search?`
                +`book=${searchedBook}`
                +`&genre=${searchedGenre}`
                +`&author=${searchedAuthor}`
            }>Search
        </button>
    </div>

    <div class="table">
        <Table data={data} searchTerm={searchedBook}/>
    </div>
</div>

<style>
    .table {
        display: flex;
        padding: 1em;
    }
</style>