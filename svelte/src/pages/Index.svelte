<script>
    export let data
    const books = data
    let searchedBook = ''
</script>

<main>
    <h1>LibraSys</h1>

    <a href="/auth/google">Sign In</a>

    <input
        type="search"
        placeholder="Search..."
        bind:value={searchedBook}
    />

    <button on:click={()=>location.href=`/search?book=${searchedBook}`}>Search</button>

    <div class="card">
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
    </div>
</main>