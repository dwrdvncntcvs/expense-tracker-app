<script lang="ts">
    import type { Dimension, Position } from "../../../types/component";

    export let position: Position = "center";
    export let dimension: Dimension = {
        width: "xs",
        height: "full",
    };

    $: positionClass = {
        start: "top-1/2 translate-x-3  left-0",
        center: "top-0",
        end: "top-1/2 -translate-x-3 right-0",
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
        full: "h-auto",
        none: "",
    };
</script>

<button class="w-screen h-full bg-black/10 fixed z-50 top-0 left-0"></button>
<div
    class="{dimensionWidthClass[dimension.width]} {dimensionHeightClass[
        dimension.height
    ]} p-4 rounded-xl bg-white fixed z-50 {positionClass[position]}"
>
    <h1>Modal</h1>
</div>
