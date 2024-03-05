<script lang="ts">
    import EtText from "$lib/components/atoms/ETText.svelte";
    import EtTextInput from "$lib/components/atoms/ETTextInput.svelte";
    import EtTextarea from "$lib/components/atoms/ETTextarea.svelte";
    import EtButton from "$lib/components/atoms/EtButton.svelte";
    import EtFormControl from "$lib/components/layouts/ETFormControl.svelte";
    import EtGrid from "$lib/components/layouts/ETGrid.svelte";
    import EtGridItem from "$lib/components/layouts/ETGridItem.svelte";
    import EtModal from "$lib/components/layouts/EtModal.svelte";
    import EtCalendarInput from "$lib/components/molecules/ETCalendarInput.svelte";
    import EtGroupTextInput from "$lib/components/molecules/ETGroupTextInput.svelte";
    import EtSelect from "$lib/components/molecules/EtSelect.svelte";
    import { categories } from "$lib/states/category";
    import EtAddImage from "../ETAddImage.svelte";

    $: categoryOptions = $categories.map((category) => ({
        value: category?.id,
        label: category?.name,
    }));

    let createExpenseData = {
        imageUrl: "",
        title: "",
        description: "",
        category: "",
        purchasedDate: "",
        price: "",
    };

    const clearCreateExpenseData = () => {
        createExpenseData = {
            imageUrl: "",
            title: "",
            description: "",
            category: "",
            purchasedDate: "",
            price: "",
        };
    };

    const submitExpense = () => {
        console.log("Create Expense: ", createExpenseData);
        clearCreateExpenseData();
    };
</script>

<EtModal
    name="add-expense-modal"
    title="Add Expense"
    position="end"
    close={clearCreateExpenseData}
    dimension={{ height: "full", width: "sm" }}
>
    <form class="flex flex-col gap-4" on:submit|preventDefault={submitExpense}>
        <EtGrid col="2">
            <EtGridItem col="2">
                <EtAddImage bind:imageUrl={createExpenseData["imageUrl"]} />
            </EtGridItem>
            <EtGridItem col="2">
                <EtFormControl id="title" label="Title">
                    <EtTextInput
                        id="title"
                        name="title"
                        bind:value={createExpenseData["title"]}
                    />
                </EtFormControl>
            </EtGridItem>
            <EtGridItem col="2">
                <EtFormControl id="description" label="Description">
                    <EtTextarea
                        height="xl"
                        id="description"
                        name="description"
                        bind:value={createExpenseData["description"]}
                    />
                </EtFormControl>
            </EtGridItem>
            <EtGridItem col="1">
                <EtFormControl id="category" label="Category">
                    <EtSelect
                        selectOptions={categoryOptions}
                        id="category"
                        name="category"
                        bind:value={createExpenseData["category"]}
                    />
                </EtFormControl>
            </EtGridItem>
            <EtGridItem col="1">
                <EtFormControl id="purchasedDate" label="Date of Purchase">
                    <EtCalendarInput
                        id="purchasedDate"
                        name="purchasedDate"
                        bind:value={createExpenseData["purchasedDate"]}
                    />
                </EtFormControl>
            </EtGridItem>
            <EtGridItem col="2">
                <EtFormControl id="price" label="Price">
                    <EtGroupTextInput
                        id="price"
                        name="price"
                        bind:value={createExpenseData["price"]}
                    >
                        <EtText>Php</EtText>
                    </EtGroupTextInput>
                </EtFormControl>
            </EtGridItem>
        </EtGrid>
        <EtButton color="secondary" round="xxl" type="submit">CREATE</EtButton>
    </form>
</EtModal>
