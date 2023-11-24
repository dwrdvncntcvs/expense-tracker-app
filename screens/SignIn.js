import { Text, View } from "react-native";
import AuthForm from "../components/Auth/AuthForm";

const SignIn = () => {
    const submitHandler = async (user) => {
        console.log("User: ", user);
    };

    return (
        <AuthForm
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={submitHandler}
        />
    );
};

export default SignIn;
