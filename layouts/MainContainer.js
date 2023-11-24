import { StyleSheet, View } from "react-native";

const MainContainer = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: 60,
    },
});

export default MainContainer;
