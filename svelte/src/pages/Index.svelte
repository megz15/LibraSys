<script>
    export let books
    // let searchedBook = 'Search'
</script>

<main>
    <h1>LibraSys</h1>

    <a href="/auth/google">Sign In</a>

    <input
        type="search"
        placeholder="Search..."
    />

    <button on:click={()=>window.open("https://www.w3schools.com")}>Search</button>

    <div class="card">
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
    </div>
</main>