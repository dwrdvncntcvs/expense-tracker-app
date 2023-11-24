import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import MainContainer from "../../layouts/MainContainer";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
import { DEFAULT_STYLE } from "../../configs/constants";
import useAuthForm from "../../hooks/useAuthForm";

const AuthForm = ({ initialValues, onSubmit }) => {
    const { userState, fields, resetForm } = useAuthForm(initialValues);
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    const signInAction = async () => {
        await onSubmit(userState);
        resetForm();
    };

    return (
        <MainContainer>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Image source={require("../../assets/logo.png")} />
                </View>
                {fields.map(({ icon, name, onChange, placeholder, value }) => (
                    <View style={styles.inputField} key={name}>
                        <Icon name={icon} size={15} color={"gray"} />
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            secureTextEntry={
                                name === "password" ? !showPassword : false
                            }
                            style={styles.textInput}
                            placeholder={placeholder}
                        ></TextInput>
                        {(name === "password" ||
                            name === "confirm_password") && (
                            <TouchableOpacity
                                style={styles.clickable}
                                onPress={togglePassword}
                            >
                                <Icon
                                    name={showPassword ? "eye-off" : "eye"}
                                    size={15}
                                    color={"gray"}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <Pressable style={styles.button} onPress={signInAction}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
                <View style={styles.footerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>
                            Doesn't have an account yet?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 10,
        gap: 10,
    },
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        flex: 1,
    },
    footerContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        color: DEFAULT_STYLE.COLOR.PRIMARY,
    },
    inputField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        width: "100%",
        padding: 5,
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
    },
    clickable: {
        width: 30,
        height: "auto",
    },
    button: {
        paddingHorizontal: 20,
        width: "80%",
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: DEFAULT_STYLE.COLOR.PRIMARY,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    linkText: {
        color: DEFAULT_STYLE.COLOR.TERTIARY,
    },
});

export default AuthForm;
