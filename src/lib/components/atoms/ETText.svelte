<script lang="ts">
    import type { Color, FontWeight, TextSize } from "../../../types/component";

    export let size: TextSize = "sm";
    export let fontWeight: FontWeight = "normal";
    export let color: Color = "normal";
    export let className: string = "";

    $: sizeClass = {
        sm: "text-sm",
        xs: "text-xs",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        xxl: "text-2xl",
        xxxl: "text-3xl",
    };

    $: fontWeightClass = {
        extrabold: "font-extrabold",
        extralight: "font-extralight",
        light: "font-light",
        thin: "font-thin",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
    };

    $: colorClass = {
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
        quaternary: "text-quaternary",
        success: "text-success",
        failure: "text-failure",
        warning: "text-warning",
        light: "text-light",
        normal: "text-black/80",
    };
</script>

<p
    class="{sizeClass[size]} {fontWeightClass[fontWeight]} {colorClass[
        color
    ]} {className}"
>
    <slot />
</p>
