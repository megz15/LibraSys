<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import type { Book } from '../../server/types'
  // import ShowBooks from './lib/ShowBooks.svelte'
  let books:Book[]
  fetch('/api/getBooks')
    .then(response => response.json())
    .then(data => {
      books = data;
    });
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>LibraSys</h1>

  <div class="card">
    <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>