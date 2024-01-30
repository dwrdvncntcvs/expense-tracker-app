<script>
    import EtContent from "$lib/components/layouts/EtContent.svelte";
    import EtCreateExpenseButton from "$lib/components/organisms/ETCreateExpenseButton.svelte";
    import EtNavigation from "$lib/components/organisms/EtNavigation.svelte";

    const slugs = ["home", "profile"];
</script>

<EtContent size="md">
    <EtNavigation />
    <EtContent size="full" className="py-4">
        <slot />
    </EtContent>
    <EtCreateExpenseButton />
</EtContent>
