import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/SignIn";

const Main = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SignIn />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});

export default Main;
