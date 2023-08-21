import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const InitialGuess = generateRandomBetween(1, 100, userNumber);

    const [currentGuess, setCurrentGuess] = useState(InitialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary=1;
        maxBoundary= 100;
    },[]);

    function nextGuessHandler(direction) {
        if (
            direction === 'lower' && currentGuess < userNumber ||
            direction === 'greater' && currentGuess > userNumber) {
            Alert.alert('You lied', 'You know that is wrong...', [{ text: 'sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }
    return (
        <SafeAreaView style={styles.screen} >
            <View style={styles.screen} >
                <Title> Opponent Guess </Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >
                                <Ionicons name="md-remove" size={24} color='white' />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >
                                <Ionicons name="md-add" size={24} color='white' />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
                {/* <View> Log Rounds </View> */}
            </View>
        </SafeAreaView>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    }
});