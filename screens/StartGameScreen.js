import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCorrect={false} />
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
        backgroundColor:'#ffffff',
        borderRadius: 10,
        elevation: 4,
        shadowColor:'black',
        shadowOffset: { width: 0,height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: '#ddb52f',
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "center"
    }
});