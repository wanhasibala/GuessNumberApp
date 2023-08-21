import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

import Title from "../components/ui/Title";
import Color from "../constant/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}  >
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}  >
                <Image
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText}>Your phone need {' '}
                <Text style={styles.highlightedTex}>{roundsNumber}</Text> {' '}
                times to guess number{' '}
                <Text style={styles.highlightedTex}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
        </View>
    );
}
export default GameOverScreen;

const deviceWidth =  Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: deviceWidth < 380 ? 150:300,
        width: deviceWidth < 380 ? 150:300,
        borderRadius: deviceWidth < 380 ? 75:150,
        borderWidth: 3,
        borderColor: Color.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlightedTex: {
        fontFamily: 'open-sans-bold',
        color: Color.primary500,
    }
});