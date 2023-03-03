<script>
    export let data

    import { onMount } from 'svelte';

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
</script>

<main>
    <h1>Admin panel</h1>
    <button>Create new entry</button><br>

    {#if DataTable}{#if IconButton}{#if Select}
    <DataTable style="width: 100%;">
        <Head>
            <Row>
                {#each Object.keys(data[0]) as a}
                    <Cell>{a}</Cell>
                {/each}
            </Row>
        </Head>
        <Body>
            {#each slice as d}
                <Row>
                    {#each Object.keys(d) as p}
                        <Cell>{JSON.stringify(d[p])}</Cell>
                    {/each}
                </Row>
            {/each}
        </Body>

        <!-- Code for table pagination from the SMUI docs -->

        <Pagination slot="paginate">
            <svelte:fragment slot="rowsPerPage">
                <Label>Rows Per Page</Label>
                <Select variant="outlined" bind:value={rowsPerPage} noLabel>
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={15}>15</Option>
                </Select>
            </svelte:fragment>
            <svelte:fragment slot="total">
                {start + 1}-{end} of {data.length}
            </svelte:fragment>
        
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
        </Pagination>
    </DataTable>
    {/if}{/if}{/if}
</main>