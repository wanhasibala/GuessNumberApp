import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";

import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
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

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver]);

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
                    <InstructionText>Higher or Lower</InstructionText>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >-</PrimaryButton>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >+</PrimaryButton>
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
});