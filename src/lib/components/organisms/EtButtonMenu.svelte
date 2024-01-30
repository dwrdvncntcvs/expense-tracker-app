<script lang="ts">
    import type { ButtonProp, ButtonMenuOption } from "../../../types/button";
    import EtButton from "../atoms/EtButton.svelte";

    let isMenuOpen = false;

    export let options: ButtonMenuOption[] = [];
    export let buttonProps: ButtonProp = {
        color: "light",
        fontSize: "sm",
        padding: "sm",
        round: "sm",
        type: "button",
        width: "full",
    };
</script>

<div class="relative">
    <EtButton {...buttonProps} on:click={() => (isMenuOpen = !isMenuOpen)}>
        <slot />
    </EtButton>
    {#if isMenuOpen && options.length}
        <div class="absolute border min-w-32 right-0 rounded-xl overflow-auto">
            {#each options as o, i (i)}
                <EtButton
                    className="text-start hover:bg-gray-100 px-4"
                    padding="sm"
                    color="light"
                    on:click={() => {
                        o.onClick();
                        isMenuOpen = false;
                    }}>{o.label}</EtButton
                >
            {/each}
        </div>
    {/if}
</div>
