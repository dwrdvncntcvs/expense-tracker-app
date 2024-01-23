<script lang="ts">
    import type { InputType } from "../../../types/component";

    type Round = "left" | "right";

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
        roundedClass = "rounded-r-0";
    } else if (round === "right") {
        roundedClass = "rounded-l-0";
    }
</script>

<input
    {placeholder}
    bind:value
    {id}
    {name}
    {...{ type }}
    class="{hasBorder ? 'border' : ''} w-full p-1 {isRounded
        ? 'rounded-lg'
        : ''} {roundedClass}"
    on:input
/>
