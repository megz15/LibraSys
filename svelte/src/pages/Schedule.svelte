<script>
    export let data
    import UserBookList from "../components/UserBookList.svelte";
</script>

<div class="hero">
    <h1>Schedule notifications</h1>
    <h3>You can customize and schedule notifications for your issued books here!</h3>
    <UserBookList data={data}/>
</div>

<style>
    h1 {
        margin: 0;
    }

    h3 {
        padding-top: 1em;
        padding-bottom: 2em;
    }
</style>