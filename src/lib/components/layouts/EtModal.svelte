<script lang="ts">
    import type { Dimension, Position } from "../../../types/component";
    import { modal, removeModal } from "$lib/states/modal";

    export let name: string | null = null;
    export let position: Position = "center";
    export let dimension: Dimension = {
        width: "xs",
        height: "full",
    };

    $: positionClass = {
        start: "top-0 left-0",
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        end: "top-0 right-0",
    };

    $: dimensionWidthClass = {
        xs: "w-[400px]",
        sm: "w-[500px]",
        md: "w-[600px]",
        lg: "w-[700px]",
        xl: "w-[800px]",
        full: "w-full",
        none: "",
    };

    $: dimensionHeightClass = {
        xs: "h-[400px]",
        sm: "h-[500px]",
        md: "h-[600px]",
        lg: "h-[700px]",
        xl: "h-[800px]",
        full: "h-full",
        none: "",
    };
</script>

{#if name === $modal.name}
    <button
        class="w-screen h-full bg-black/10 fixed z-50 top-0 left-0"
        type="button"
        on:click={removeModal}
    />
    <div
        class="p-4 fixed z-50 {dimensionHeightClass[
            dimension.height
        ]} {positionClass[position]} {dimensionWidthClass[dimension.width]}"
    >
        <div class="p-4 rounded-xl bg-white h-full w-full">
            <slot />
        </div>
    </div>
{/if}
