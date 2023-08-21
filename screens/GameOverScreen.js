import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/ui/Title";
import Color from "../constant/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const { width, height} = useWindowDimensions();

    let imageSize= 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 400){
        imageSize= 80;
    }

    const imageStyle= {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/ 2,
    }
    
    return (
       < ScrollView style={styles.screen} >
        <View style={styles.rootContainer}  >
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer, imageStyle]}  >
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
        </ScrollView>
    );
}
export default GameOverScreen;

// const deviceWidth =  Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
    }, 
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // height: deviceWidth < 380 ? 150:300,
        // width: deviceWidth < 380 ? 150:300,
        // borderRadius: deviceWidth < 380 ? 75:150,
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