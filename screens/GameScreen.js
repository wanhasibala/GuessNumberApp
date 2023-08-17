import { View, Text, StyleSheet, SafeAreaView } from "react-native";

function GameScreen() {
    return (
        <SafeAreaView style={styles.screen} >
        <View style={styles.screen} >
            <Text>Opponent Guess</Text>
            {/* Guess */}
            <View>
                <Text> Higher or Lower? </Text>
                {/* + - */}
            </View>
            {/* <View> Log Rounds </View> */}
        </View>
        </SafeAreaView>
    );
}

export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex: 1, 
        padding:12,
    }
});