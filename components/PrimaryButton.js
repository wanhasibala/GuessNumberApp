import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children,onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#640233' }}
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
        backgroundColor: "#72063c",
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