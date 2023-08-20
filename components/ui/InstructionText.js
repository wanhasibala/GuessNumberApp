import { Text, StyleSheet } from "react-native";
import Color from "../../constant/colors";

function InstructionText({ children }) {
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Color.accent500,
        fontSize: 24,
    },
})