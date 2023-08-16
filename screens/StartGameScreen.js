import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginHorizontal:24, 
        marginTop: 100,
        backgroundColor:'#72063c',
        borderRadius: 10,
        elevation: 4,
        shadowColor:'black',
        shadowOffset: { width: 0,height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "center"
    }
});