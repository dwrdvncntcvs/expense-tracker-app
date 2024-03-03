<script>
    import EtModal from "$lib/components/layouts/EtModal.svelte";
    import EtAddImage from "../ETAddImage.svelte";
</script>

<EtModal
    name="add-expense-modal"
    title="Add Expense"
    position="end"
    dimension={{ height: "full", width: "sm" }}
>
    <form>
        <EtAddImage />
    </form>
</EtModal>
