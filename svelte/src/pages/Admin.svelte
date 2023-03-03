<script>
    export let data
    import Table from "../components/Table.svelte";
</script>

<main>
    <h1>Admin panel</h1>
    <button>Create new entry</button><br>

    <Table data={data}/>
</main>