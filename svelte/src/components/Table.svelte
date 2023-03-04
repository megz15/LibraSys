<script>

    export let data

    if (!data.length) data = [{Error:'No records returned'}]

    import { onMount } from 'svelte';
    // import { getContext } from 'svelte'

    let DataTable
    let Head
    let Body
    let Row
    let Cell

    let Pagination
    let Label

    let Select
    let Option

    let IconButton

    // Importing the module in the traditional way wasn't working
    // Since according to the svelte docs regarding svelte/register:
    /*
        The .default is necessary because we're converting from
        native JavaScript modules to the CommonJS modules recognised
        by Node. Note that if your component imports JavaScript
        modules, they will fail to load in Node and you will need to
        use a bundler instead.
    */
    // So, I'm using dynamic imports to load the modules after
    // the component has been loaded

    onMount(async () => {
        let module
        
        module= await import('@smui/data-table');
        DataTable = module.default
        Head = module.Head
        Body = module.Body
        Row = module.Row
        Cell = module.Cell
        Pagination = module.Pagination
        Label = module.Label

        module = await import('@smui/select');
        Select = module.default
        Option = module.Option

        module = await import('@smui/icon-button');
        IconButton = module.default
    });

    let rowsPerPage = 5;
    let currentPage = 0;

    $: start = currentPage * rowsPerPage;
    $: end = Math.min(start + rowsPerPage, data.length);
    $: slice = data.slice(start, end);
    $: lastPage = Math.max(Math.ceil(data.length / rowsPerPage) - 1, 0);

    $: if (currentPage > lastPage) {
        currentPage = lastPage;
    }

    import BookModal from './BookModal.svelte';
    let isBookModalOpen = false
    let modal

    function openUserBookModal(d) {
        isBookModalOpen = true
        modal = new BookModal({
            target: document.body,
            props: {
                book: d
            },
        })
    }

</script>

<main>

    <!-- {#if isBookModalOpen}
        <BookModal onClose={()=>isBookModalOpen = false}/>
    {/if} -->

    {#if DataTable}
    <DataTable stickyHeader style="width: 100%;">
        <Head>
            <Row>
                {#each Object.keys(data[0]) as a}
                    <Cell>{a}</Cell>
                {/each}
            </Row>
        </Head>
        <Body>
            {#each slice as d}
                <svelte:component this={Row} on:click={
                    ()=>{
                        //location.href=`/search/${(JSON.stringify(d.bID).slice(1, -1))}`
                        switch(location.pathname) {
                            case '/search':
                            case '/admin/books':
                                openUserBookModal(d)
                        }                        
                        // console.log(getContext('checkedOut'))
                        // isBookModalOpen = true
                    }
                }>
                    {#each Object.keys(d) as p}
                        <Cell>{JSON.stringify(d[p])}</Cell>
                    {/each}
                </svelte:component>
            {/each}
        </Body>

        <!-- Code for table pagination from the SMUI docs -->

        <Pagination slot="paginate">
            <svelte:fragment slot="rowsPerPage">
                <Label>Rows Per Page</Label>
                {#if Select}
                    <Select variant="outlined" bind:value={rowsPerPage} noLabel>
                        <Option value={5}>5</Option>
                        <Option value={10}>10</Option>
                        <Option value={15}>15</Option>
                    </Select>
                {/if}
            </svelte:fragment>
            <svelte:fragment slot="total">
                {start + 1}-{end} of {data.length}
            </svelte:fragment>
        
            {#if IconButton}
                <IconButton
                    class="material-icons"
                    action="first-page"
                    title="First page"
                    on:click={() => (currentPage = 0)}
                    disabled={currentPage === 0}> first_page
                </IconButton>
                <IconButton
                    class="material-icons"
                    action="prev-page"
                    title="Prev page"
                    on:click={() => currentPage--}
                    disabled={currentPage === 0}> chevron_left
                </IconButton>
                <IconButton
                    class="material-icons"
                    action="next-page"
                    title="Next page"
                    on:click={() => currentPage++}
                    disabled={currentPage === lastPage}> chevron_right
                </IconButton>
                <IconButton
                    class="material-icons"
                    action="last-page"
                    title="Last page"
                    on:click={() => (currentPage = lastPage)}
                    disabled={currentPage === lastPage}> last_page
                </IconButton>
            {/if}
        </Pagination>
    </DataTable>
    {/if}
</main>