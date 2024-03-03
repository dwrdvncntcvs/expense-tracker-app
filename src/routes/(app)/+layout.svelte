<script>
    import EtContent from "$lib/components/layouts/EtContent.svelte";
    import EtModal from "$lib/components/layouts/EtModal.svelte";
    import EtCreateExpenseButton from "$lib/components/organisms/ETCreateExpenseButton.svelte";
    import EtNavigation from "$lib/components/organisms/EtNavigation.svelte";

    import { goto } from "$app/navigation";
    import { setUser } from "$lib/states/user";
    import endpoint, { request } from "$lib/utils/api";
    import { onMount } from "svelte";
    import EtAddExpenseModal from "$lib/components/organisms/modals/ETAddExpenseModal.svelte";

    onMount(async () => {
        const response = await request.get(
            endpoint.usersEndpoint("/isAuthenticated")
        );
        if (response.ok) setUser(response.data);

        if (!response.ok) goto("/sign-in");
    });

    const slugs = ["home", "profile"];
</script>

<EtContent size="md">
    <EtNavigation />
    <EtContent size="full" className="py-4">
        <slot />
    </EtContent>
    <EtCreateExpenseButton />
    <EtAddExpenseModal />
</EtContent>
