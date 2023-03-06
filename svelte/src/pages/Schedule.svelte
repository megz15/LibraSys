<script>
    export let data
    import UserBookList from "../components/UserBookList.svelte";
</script>

data: {JSON.stringify(data)}
<UserBookList data={data}/>