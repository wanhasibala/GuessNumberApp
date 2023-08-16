import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetNumber(){
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number must be real number and between 1 and 99',
                [{ text: 'okay', style: 'destructive', onPress: resetNumber }]
            );
            return;
        }
        onPickedNumber(choosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer} >
                    <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
                </View >
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;
const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'stretch',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        backgroundColor: '#3b021f',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    textInput: {
        height: 50,
        width: 'auto',
        fontSize: 32,
        color: '#ddb52f',
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
    }
});