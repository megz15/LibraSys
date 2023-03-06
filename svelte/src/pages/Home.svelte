<script>
    let searchedBook
</script>

<div class="hero">
    <img src="../../static/logo.png" alt="LibraSys Logo">
    <h1>LibraSys</h1>
    <h3>• Where reading meets technology •</h3>
    
    <div>
        <input placeholder="Search..." bind:value={searchedBook} />
        <button on:click={
            () => location.href = `/search?book=${searchedBook}`
        }>Search</button>
    </div>
    
    <div>
        <lottie-player
            id="down-arrow"
            src="static/Arrows.json"
            background="transparent"
            speed="0.8"
            loop autoplay
        />
    </div>
</div>

{#each Array(100) as _}
lorem ipsum lorem ipsum lorem ipsum <br>
{/each}

<style>
    #down-arrow {
        width: 150px;
        height: 150px;
        transform: rotate(90deg);
    }

    .hero {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>