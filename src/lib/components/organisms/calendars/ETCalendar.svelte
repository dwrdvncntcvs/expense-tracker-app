<script lang="ts">
    import EtText from "$lib/components/atoms/ETText.svelte";
    import EtButton from "$lib/components/atoms/EtButton.svelte";
    import {
        generateDays,
        getWeekDaysName,
        parseDate,
        parseJsonDate,
    } from "$lib/utils/calendar";
    import { parseName } from "$lib/utils/helpers";
    import type { Size } from "../../../../types/component";

    export let textSize: Size = "md";
    export let dayNameLength: number;
    export let value = "";

    $: weekDaysNames = getWeekDaysName(
        dayNameLength ? { nameLength: dayNameLength } : {}
    );
    $: dayList = generateDays(1, 2000);

    $: cols = [
        "col-start-1",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
    ];

    $: textSizeClass = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
    };
</script>

<div class="w-auto space-y-2 p-2">
    <div
        class="grid grid-cols-7 text- gap-1 text-center {textSizeClass[
            textSize
        ]}"
    >
        {#each weekDaysNames as dayName, i (`${dayName}-${i}`)}
            <div class="p-2 text-inherit">
                <EtText color="primary" fontWeight="semibold"
                    >{parseName(dayName, "-")}</EtText
                >
            </div>
        {/each}

        <!-- You can dynamically generate days here -->
        {#each dayList as date (date.dateStr)}
            <button
                type="button"
                id={date.dateStr}
                class="p-2 text-inherit hover:bg-primary/10 rounded-lg {cols[
                    date.day
                ]}"
                on:click={() => {
                    value = parseDate(parseJsonDate(date));
                }}>{date.date}</button
            >
        {/each}

        <!-- Continue this pattern for the rest of the month -->
    </div>
    <EtButton
        round="lg"
        color="secondary"
        on:click={() => {
            value = "";
        }}>Clear</EtButton
    >
</div>
