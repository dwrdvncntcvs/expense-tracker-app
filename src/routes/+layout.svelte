<script lang="ts">
    import { onMount } from "svelte";
    import "../app.css";
    import endpoint, { request } from "$lib/utils/api";
    import { goto } from "$app/navigation";
    import { setUser } from "$lib/states/user";

    onMount(async () => {
        const response = await request.get(
            endpoint.usersEndpoint("/isAuthenticated")
        );
        if (response.ok) setUser(response.data);

        goto(response.ok ? "/" : "/sign-in");
    });
</script>

<slot />
