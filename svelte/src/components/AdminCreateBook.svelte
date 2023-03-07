<script>
    import { onMount } from "svelte";

    let bID       = '',
        bName     = '',
        genre     = '',
        author    = '',
        copyCount = ''
    let pathName

    onMount(async () => {
        pathName = location.pathname
    })

    import ConsoleModal from "./ConsoleModal.svelte";

    function openConsoleModal(data) {
        new ConsoleModal({
            target: document.body,
            props: {
                data: data
            },
        })
    }
    
</script>

{#if pathName == '/admin/books'}
    <input placeholder="Book ID" bind:value={bID} />
    <input placeholder="Book Name" bind:value={bName} />
    <input placeholder="Genre" bind:value={genre} />
    <input placeholder="Author" bind:value={author} />
    <input placeholder="Copies" bind:value={copyCount} />
    <button on:click={()=>{
        let book = {
            bID: bID,
            bName: bName,
            genre: genre,
            author: author,
            copyCount: copyCount
        }
        fetch('/api/createBook', {method: 'POST', body: JSON.stringify({
            book: book
        }), headers: {
            'Content-Type': 'application/json'
        }}) .then(res => res.json())
            .then(res => {
                openConsoleModal(res)
                console.log(res)
            })
    }}>Create Book</button>
{/if}