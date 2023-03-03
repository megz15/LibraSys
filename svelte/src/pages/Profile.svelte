<script>
    export let data
    
    // import * as jwt from "jsonwebtoken";
    // Since I can't use external libraries with svelte/register
    // Here's a custom JWT decoder
    
    function decodeJWT(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    console.log(decodeJWT(document.cookie.slice(4)))
</script>

<main>
    <h1>Hello, {data.fName}!</h1><br>
    {#if data.isAdmin}
        <h1>You're an admin!</h1><br>
    {/if}
    Your details: <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
</main>