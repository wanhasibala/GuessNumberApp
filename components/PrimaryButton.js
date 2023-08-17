import { View, Text, Pressable, StyleSheet } from "react-native";

import Color from '../constant/colors';

function PrimaryButton({ children,onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Color.primary600 }}
                style={({ pressed }) => pressed
                    ? [styles.pressed, styles.buttonInnerContainer] :
                    styles.buttonInnerContainer} >
                <Text style={styles.buttonText} >{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Color.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});