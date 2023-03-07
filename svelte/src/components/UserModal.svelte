<script>
    export let user

    import { onMount } from 'svelte';

    let Dialog
    let Title
    let Content
    let Actions

    let Button
    let Label

    onMount(async () => {

        let module
        
        module = await import('@smui/dialog');
        Dialog = module.default
        Title = module.Title
        Content = module.Content
        Actions = module.Actions

        module = await import('@smui/button');
        Button = module.default
        Label = module.Label
    });

    import AdminUpdateUser from './AdminUpdateUser.svelte';
    import ConsoleModal from './ConsoleModal.svelte';
    import UserBooksListModal from './UserBooksListModal.svelte';
    
    function openUpdateUserModal(d) {
        new AdminUpdateUser({
            target: document.body,
            props: {
                user: d
            },
        })
    }

    function openConsoleModal(data) {
        new ConsoleModal({
            target: document.body,
            props: {
                data: data
            },
        })
    }

    function openUserBooksListModal(data) {
        new UserBooksListModal({
            target: document.body,
            props: {
                user: user,
            },
        })
    }

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>Users</Title>
            <Content>
                {#each Object.keys(user) as i}
                    {i}: {user[i]}<br>
                {/each}
            </Content>
            <Actions>
                {#if Button}                        
                    <svelte:component this={Button} on:click={()=>{
                        openUpdateUserModal(user)
                    }}>
                        <Label>Update User</Label>
                    </svelte:component>

                    <svelte:component this={Button} on:click={()=>{
                        openUserBooksListModal(user)
                        // console.log(user)
                    }}>
                        <Label>Checked Out Books</Label>
                    </svelte:component>
                    
                    <svelte:component this={Button} on:click={()=>{
                        fetch('/api/deleteUser', {method: 'POST', body: JSON.stringify({
                            uID: user.uID
                        }), headers: {
                            'Content-Type': 'application/json'
                        }}) .then(res => res.json())
                            .then(res => {
                                openConsoleModal(res)
                                console.log(res)
                                if (res['message'] == `User ${user.uID} deleted succesfully`){
                                    location.reload()
                                }
                            })
                    }}>
                        <Label>Delete User</Label>
                    </svelte:component>

                    <Button>
                        <Label>Close</Label>
                    </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>