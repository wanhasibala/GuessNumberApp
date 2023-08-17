import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function GameScreen({userNumber}) {
    const InitialGuess = generateRandomBetween(1, 100, userNumber);

    const [currentGuess, setCurrentGuess] = useState(InitialGuess);

    return (
        <SafeAreaView style={styles.screen} >
            <View style={styles.screen} >
                <Title> Opponent Guess </Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View>
                    <Text> Higher or Lower? </Text>
                    <View>
                        <PrimaryButton>+</PrimaryButton>
                        <PrimaryButton>-</PrimaryButton>
                    </View>
                </View>
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