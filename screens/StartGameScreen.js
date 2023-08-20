import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Color from "../constant/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetNumber() {
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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card >
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
    )
}

export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: Color.accent500,
        borderBottomWidth: 2,
        borderBottomColor: Color.accent500,
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