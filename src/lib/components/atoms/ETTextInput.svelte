<script lang="ts">
    import type { InputType } from "../../../types/component";

    type Round = "left" | "right" | "none";

    export let placeholder = "";
    export let name = "";
    export let value = "";
    export let type: InputType = "text";
    export let id = "";
    export let round: Round = "left";
    export let hasBorder = true;
    export let isRounded = true;

    $: roundedClass = "";

    $: if (round === "left") {
        roundedClass = "rounded-l-lg";
    } else if (round === "right") {
        roundedClass = "rounded-r-lg";
    } else if (round === "none") {
        roundedClass = "rounded-none";
    }
</script>

<input
    {placeholder}
    bind:value
    {id}
    {name}
    {...{ type }}
    class="{hasBorder ? 'border' : ''} text-sm w-full p-1 px-2 {isRounded
        ? 'rounded-lg'
        : ''} {roundedClass} focus:outline focus:outline-primary outline-2 text-primary"
    on:input
/>
