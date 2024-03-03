<script>
    import EtContent from "$lib/components/layouts/EtContent.svelte";
    import EtCreateExpenseButton from "$lib/components/organisms/ETCreateExpenseButton.svelte";
    import EtNavigation from "$lib/components/organisms/EtNavigation.svelte";
    import { goto } from "$app/navigation";
    import EtAddExpenseModal from "$lib/components/organisms/modals/ETAddExpenseModal.svelte";
    import { setUser } from "$lib/states/user";
    import endpoint, { request } from "$lib/utils/api";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    onMount(async () => {
        const checkAuth = async () => {
            const response = await request.get(
                endpoint.usersEndpoint("/isAuthenticated")
            );

            if (response.ok) setUser(response.data.user);

            if (!response.ok) goto("/sign-in");
        };

        await checkAuth();
    });

    const pagesShouldNotHaveCreateExpense = ["settings"];

    $: displayCreateExpense = !$page.url.pathname
        .split("/")
        .some((val) => pagesShouldNotHaveCreateExpense.includes(val));
</script>

<EtContent size="md">
    <EtNavigation />
    <EtContent size="full" className="pt-4">
        <slot />
    </EtContent>
    {#if displayCreateExpense}
        <EtCreateExpenseButton />
    {/if}
    <EtAddExpenseModal />
</EtContent>
