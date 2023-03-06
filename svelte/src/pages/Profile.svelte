<script>

    export let data
    import UserBookList from "../components/UserBookList.svelte";
    
</script>

{#if data.isAdmin}
Admin Panel:
    <button on:click={() => location.href = '/admin/users'}>Manage User</button>
    <button on:click={() => location.href = '/admin/books'}>Manage Books</button>
{/if}

<h1>{#if data.isAdmin}Welcome{:else}Hello{/if}, {data.fName}!</h1><br>

<div class="profile-columns">
    <UserBookList data={JSON.parse(data.booksBorrowed)} />
    <div>
        User ID: {data.uID}<br>
        Email: {data.email}<br>
        Name: <input bind:value={data.fName}><br>
        Username: <input bind:value={data.uName}><br>
        Admin? {data.isAdmin}<br>
        Penalized? {data.isPenalized}<br>
    </div>
</div>

<!-- Your details: <pre><code>{JSON.stringify(data, null, 2)}</code></pre> -->

<style>
    .profile-columns {
        display: flex;
        align-items: center;
        gap: 5%;
        padding-left: 5%;
        padding-right: 5%;
        overflow: hidden;
    }
</style>