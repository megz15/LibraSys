<script>
    import { onMount } from "svelte";

    let pathName

    onMount(async () => {
        pathName = location.pathname
    })
</script>

{#if pathName == '/admin/books'}
    <input placeholder="Book ID" />
    <input placeholder="Book Name" />
    <input placeholder="Genre" />
    <input placeholder="Author" />
    <input placeholder="Copies" />
    <button>Create Book</button>
{/if}