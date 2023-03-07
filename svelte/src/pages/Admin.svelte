<script>
    export let data
    
    import Table from "../components/Table.svelte";

    // import { onMount } from "svelte";

    // let pathname

    // onMount(async() => {
    //     if (typeof location !== 'undefined') {
    //         pathname = location.pathname;
    //     }
    // })

    import AdminModifyBookModal from "../components/AdminModifyBookModal.svelte";

    function openCreateBookModal() {
        new AdminModifyBookModal({
            target: document.body,
            props: {
                type: 'Create',
                book: {}
            }
        })
    }
    
</script>

<div class="hero">
    <div>
        Admin Panel:
            <button on:click={() => location.href = '/admin/users'}>Manage User</button>
            <button on:click={() => location.href = '/admin/books'}>Manage Books</button>
    </div>

        {#if location.pathname == '/admin/users'}
            <h1>Users</h1>
        {:else}
            <div id="book-stuff-row">
                <h1>Books</h1>
                <button on:click={openCreateBookModal}>Create</button>
            </div>
        {/if}

    <Table data={data} searchTerm=''/>
</div>

<style>
    #book-stuff-row {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>