<script>
    import EtContent from "$lib/components/layouts/EtContent.svelte";
    import EtNavigation from "$lib/components/organisms/EtNavigation.svelte";
</script>

<EtContent size="md">
    <EtNavigation />
    <EtContent size="full" className="py-4">
        <slot />
    </EtContent>
</EtContent>
