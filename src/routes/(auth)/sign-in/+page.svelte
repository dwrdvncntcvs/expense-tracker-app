<script>
    import EtButton from "$lib/components/atoms/EtButton.svelte";
    import EtIcon from "$lib/components/atoms/EtIcon.svelte";
    import EtGroupTextInput from "$lib/components/molecules/ETGroupTextInput.svelte";
    import { AtSymbol, Eye, EyeSlash, Key } from "svelte-hero-icons";

    let authData = {
        email: "",
        password: "",
    };

    let shouldShowPassword = false;

    const handleAuthAction = () => {
        console.log("Auth Data: ", authData);
    };
</script>

<form
    class="flex flex-col gap-2 items-center w-80"
    on:submit|preventDefault={handleAuthAction}
>
    <EtGroupTextInput
        type="text"
        placeholder="Email Address"
        id="email"
        name="email"
        bind:value={authData["email"]}
    >
        <EtIcon src={AtSymbol} dimension="sm" />
    </EtGroupTextInput>
    <EtGroupTextInput
        id="password"
        name="password"
        bind:value={authData["password"]}
        placeholder="Password"
        type={shouldShowPassword ? "text" : "password"}
        buttonOpts={{
            has: true,
            icon: shouldShowPassword ? EyeSlash : Eye,
            onClick: () => {
                shouldShowPassword = !shouldShowPassword;
            },
        }}
        isInputRounded={false}
    >
        <EtIcon src={Key} dimension="sm" />
    </EtGroupTextInput>
    <EtButton type="submit" round="xxxl" color="primary" width="md">
        Sign In
    </EtButton>
</form>
