<div id="navbar">
    <div id="logo"><h4>LibraSys</h4></div>
    <div id="route-group">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <!-- <a href="/login">Login</a> -->
        <!-- <a href="/profile">Profile</a> -->
        <a href="/about">About</a>
    </div>
    <div id="account-button"><button>Login</button></div>
</div>

<style>
    #navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #888;
        backdrop-filter: blur(2px) brightness(0.4);
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 auto;
        /* padding: 1em; */
    }

    #logo {
        padding-left: 5em;
    }

    #route-group {
        display: flex;
        justify-content: space-between;
        /* padding: 1em; */
        width: 30em;
    }

    #account-button {
        padding-right: 5em;
    }

</style>