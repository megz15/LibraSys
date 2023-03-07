<script>
    let searchedBook

    import HomeFeature from '../components/HomeFeature.svelte';

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

<h1>Features</h1>

<HomeFeature
    textdir='left'
    text='Borrow books from your favourite library and keep track of them easily with LibraSys.'
    image='../static/feature1.png'
/>

<HomeFeature
    textdir='right'
    text='As an admin, keep track of users and their activities, from borrowed books to returned books, the due dates and outstanding books easily.'
    image='../static/feature2.png'
/>

<HomeFeature
    textdir='left'
    text='Browse through the inventory, get real time updates and schedule custom reminders and notifications!'
    image='../static/feature3.png'
/>

<HomeFeature
    textdir='right'
    text='Manage the inventory of books as an admin and digitize keeping track of books and users!'
    image='../static/feature4.png'
/>

{#each Array(100) as _}
lorem ipsum lorem ipsum lorem ipsum <br>
{/each}

<!-- <div id="features">
    <div style="display:flex;align-items:center;">
        <lottie-player id="firstLottie" src="https://assets3.lottiefiles.com/packages/lf20_1a8dx7zj.json" style="width:200px; height: 200px;" />
        <h3>Borrow books from your favourite library<br>and keep track of them easily.</h3>
    </div>

    <div style="display:flex;align-items:center;">
        <h3>Librasys allows you to select books that you want to borrow from our physical library by browsing through the inventory, getting real time updates and custom reminders and notifications.</h3>
        <lottie-player id="secondLottie" src="https://assets3.lottiefiles.com/packages/lf20_1a8dx7zj.json" style="width:200px; height: 200px;" />
    </div>

    <div style="display:flex;align-items:center;">
        <lottie-player id="thirdLottie" src="https://assets3.lottiefiles.com/packages/lf20_1a8dx7zj.json" style="width:200px; height: 200px;" />
        <h3>Borrow books from your favourite library<br>and keep track of them easily.</h3>
    </div>
</div> -->

<style>
    #down-arrow {
        width: 150px;
        height: 150px;
        transform: rotate(90deg);
    }
</style>