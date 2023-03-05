<script>
    export let data
    import AdminCreateBook from "../components/AdminCreateBook.svelte";
    import Table from "../components/Table.svelte";
</script>

<main>
    <h1>Admin panel</h1>

    <Table data={data} searchTerm=''/>
    <AdminCreateBook />
</main>