<script>
    import EtTextInput from "$lib/components/atoms/ETTextInput.svelte";
    import EtIcon from "$lib/components/atoms/EtIcon.svelte";
    import EtGroupTextInput from "$lib/components/molecules/ETGroupTextInput.svelte";
    import { Eye, Icon, User } from "svelte-hero-icons";
</script>

<p>Sign In</p>

<div class="w-96">
    <EtTextInput />
    <EtGroupTextInput
        buttonOpts={{
            has: true,
            icon: Eye,
            onClick: () => {
                console.log("Eye Click");
            },
        }}
    >
        <EtIcon src={User} size="20" dimension="sm"/>
    </EtGroupTextInput>
</div>
