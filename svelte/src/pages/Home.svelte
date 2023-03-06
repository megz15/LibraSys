<script>
    let searchedBook
</script>

<main>
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
</main>

<style>
    #down-arrow {
        width: 150px;
        height: 150px;
        transform: rotate(90deg);
    }

    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>