<script lang="ts">
    export let books
    
    let count = 1
    function addOne() {
        count += 1
    }

    let searchedBook = 'abcd'
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

    <button on:click={addOne}>Clicked {count} times!</button>

    <div class="card">
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
    </div>
</main>