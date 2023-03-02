<script lang="ts">
    import type { Book } from '../../server/types'
    let books:Book[]
    fetch('/api/getBooks')
        .then(response => response.json())
        .then(data => {
            books = data;
        });

    let searchTimer:NodeJS.Timeout
    let searchedBook = '';

    function fetchBooks() {
        fetch(`/api/searchBooks?book=${searchedBook}&limit=50`)
            .then((res) => res.json())
            .then((data) => books = data)
    }

    function handleSearch(e:Event) {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => {
            const target = e.target as HTMLInputElement
            searchedBook = target.value
            fetchBooks()
        }, 300);
    }
</script>

<main>
    <h1>LibraSys</h1>

    <a href="/auth/google">Sign In</a>

    <input
        type="search"
        placeholder="Search..."
        value={searchedBook}
        on:keyup={handleSearch}
    />

    <div class="card">
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
    </div>
</main>