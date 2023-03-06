<script>
    export let isLoggedIn
    console.log(isLoggedIn)
</script>

<div id="navbar">
    
    <div id="logo">
        <img alt="Logo"
            src="../../static/logo.png"
            style="width:32px;height:32px;"
        />
        <h4>LibraSys</h4>
    </div>
    
    <div id="route-group">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        {#if isLoggedIn}
            <a href="/schedule">Schedule</a>
        {/if}
        <!-- <a href="/login">Login</a> -->
        <!-- <a href="/profile">Profile</a> -->
        <a href="/about">About</a>
    </div>
    
    <div id="account-stuff">
        {#if !isLoggedIn}
            <button id="account-button" on:click={() => location.href = '/login'}>
                Login With&nbsp;<img
                    src="../../static/google.png"
                    alt="Google"
                    style="width:24px;height:24px;"
                />
                <!-- <div id="google"/> -->
            </button>
        {:else}
            <button id="account-button" on:click={() => location.href = '/profile'}>
                <span>Your Profile</span>
            </button>
            <!-- <button id="account-button" on:click={() => location.href = '/admin'}>
                <span>Admin Panel</span>
            </button> -->
        {/if}
    </div>

</div>

<style>
    #navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(5px) brightness(0.4);
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 auto;
        z-index: 1;
    }

    #logo {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-left: 5%;
    }

    #route-group {
        display: flex;
        justify-content: space-between;
        width: 40%;
        /* width: 30em; */
    }

    #account-stuff {
        display: flex;
        gap: 5px;
        padding-right: 5%;
    }

    #account-button {
        display: flex;
        align-items: center;
    }

</style>