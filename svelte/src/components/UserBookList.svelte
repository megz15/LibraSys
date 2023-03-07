<script>
    export let data
    data.forEach(book => {
        book.timeWhenCheckedOut = new Date(book.timeWhenCheckedOut).toLocaleString()
    });
    import Table from "./Table.svelte";
</script>

<Table searchTerm='' data={data}/>