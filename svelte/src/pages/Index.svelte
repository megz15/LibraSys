<script>
    export let books
    let searchedBook = 'Search'
    let fn = () => console.log('click')
</script>

<main>
    <h1>LibraSys</h1>

    <a href="/auth/google">Sign In</a>

    <input
        type="search"
        placeholder="Search..."
        value="{searchedBook}"
    />

    <button on:click={fn}>Search</button>

    <div class="card">
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
    </div>
</main>