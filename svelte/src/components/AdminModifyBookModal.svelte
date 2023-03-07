<script>
    export let book
    export let type

    let bID = book.bID
    let bName = book.bName
    let genre = book.genre
    let author = book.author
    let copyCount = book.copyCount

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
            <Title>{type} Book</Title>
            <Content>
                Code  : <input bind:value={    bID    }><br>
                Name  : <input bind:value={   bName   }><br>
                Genre : <input bind:value={   genre   }><br>
                Author: <input bind:value={   author  }><br>
                Copies: <input bind:value={ copyCount }><br>
            </Content>
            <Actions>
                {#if Button}
                    {#if type=='Update'}
                        <svelte:component this={Button} on:click={()=>{
                            let updatedBook = {
                                bID: bID,
                                bName: bName,
                                genre: genre,
                                author: author,
                                copyCount: copyCount
                            }

                            fetch('/api/updateBook', {method: 'POST', body:
                                JSON.stringify({
                                    originalBookID: book.bID,
                                    updatedBook: updatedBook
                                }
                            ), headers: {
                                'Content-Type': 'application/json'
                            }}) .then(res => res.json())
                                .then(res => {
                                    openConsoleModal(res)
                                    console.log(res)
                                    if (res['message'].startsWith(`Book ${book.bID} updated to: ${JSON.stringify(updatedBook)}`)){
                                        location.reload()
                                    }
                                })
                        }}>
                            <Label>Update</Label>
                        </svelte:component>
                    {:else if type=='Create'}
                        <svelte:component this={Button} on:click={()=>{
                            let newBook = {
                                bID: bID,
                                bName: bName,
                                genre: genre,
                                author: author,
                                copyCount: copyCount
                            }

                            fetch('/api/createBook', {method: 'POST', body: JSON.stringify({
                                book: newBook
                            }), headers: {
                                'Content-Type': 'application/json'
                            }}) .then(res => res.json())
                                .then(res => {
                                    openConsoleModal(res)
                                    console.log(res)
                                })
                        }}>
                            <Label>Create</Label>
                        </svelte:component>
                    {/if}
                <Button>
                    <Label>Close</Label>
                </Button>
                {/if}
            </Actions>
        </svelte:component>
    {/if}
</main>