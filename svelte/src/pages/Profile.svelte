<script>
    export let data
</script>

<main>
    <h1>Hello, {data.fName}!</h1><br>
    {#if data.isAdmin}
        <h1>You're an admin!</h1><br>
    {/if}
    Your details: <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
</main>