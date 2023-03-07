<script>

    export let data
    import UserBookList from "../components/UserBookList.svelte";
    
</script>

<div class="hero">
    {#if data.isAdmin}
    Admin Panel:
        <button on:click={() => location.href = '/admin/users'}>Manage User</button>
        <button on:click={() => location.href = '/admin/books'}>Manage Books</button>
    {/if}

    <h1>{#if data.isAdmin}Welcome{:else}Hello{/if}, {data.fName}!</h1><br>

    <div class="profile-columns">
        <UserBookList data={JSON.parse(data.booksBorrowed)} />
        <div>
            <b>User ID:</b> {data.uID}<br>
            <b>Email:</b> {data.email}<br><br>
            <b>Name:</b> {data.fName}<br>
            <b>Username:</b> {data.uName}<br><br>
            <b>Admin?</b> {#if data.isAdmin}True{:else}False{/if}<br>
            <b>Penalized?</b> {#if data.isPenalized}True{:else}False{/if}
        </div>
    </div>
</div>

<!-- Your details: <pre><code>{JSON.stringify(data, null, 2)}</code></pre> -->

<style>
    .profile-columns {
        text-align: left;
        display: flex;
        align-items: center;
        gap: 5%;
        padding-left: 5%;
        padding-right: 5%;
        overflow: hidden;
    }
</style>