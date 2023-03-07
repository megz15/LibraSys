<script>
    export let user

    let uID = user.uID
    let email = user.email
    let fName = user.fName
    let uName = user.uName
    let booksBorrowed = user.booksBorrowed
    let isAdmin = user.isAdmin
    let isPenalized = user.isPenalized

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

    import ConsoleModal from './ConsoleModal.svelte';

    function openConsoleModal(data) {
        new ConsoleModal({
            target: document.body,
            props: {
                data: data
            },
        })
    }

</script>

<main>
    {#if Dialog}
        <svelte:component this={Dialog} open>
            <Title>User</Title>
            <Content>
                User ID: <input bind:value={uID}><br>
                Email: <input bind:value={email}><br>
                Name: <input bind:value={fName}><br>
                Username: <input bind:value={uName}><br>
                Books Borrowed: <input bind:value={booksBorrowed}><br>
                Admin? <input bind:value={isAdmin}><br>
                Penalized? <input bind:value={isPenalized}><br>
            </Content>
            <Actions>
                {#if Button}
                    <svelte:component this={Button} on:click={()=>{
                        let updatedUser = {
                            uID: uID,
                            email: email,
                            fName: fName,
                            uName: uName,
                            booksBorrowed: booksBorrowed,
                            isAdmin: isAdmin,
                            isPenalized: isPenalized
                        }

                        fetch('/api/updateUser', {method: 'POST', body:
                            JSON.stringify({
                                originalUserID: user.uID,
                                updatedUser: updatedUser
                            }
                        ), headers: {
                            'Content-Type': 'application/json'
                        }}) .then(res => res.json())
                            .then(res => {
                                openConsoleModal(res)
                                console.log(res)
                                if (res['message'].startsWith(`User ${user.uID} updated to: ${JSON.stringify(updatedUser)}`)){
                                    location.reload()
                                }
                            })
                    }}>
                        <Label>Update</Label>
                    </svelte:component>
                <Button>
                    <Label>Close</Label>
                </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>