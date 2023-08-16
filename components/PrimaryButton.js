import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler(){
        console.log('Pressed');
    }

    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.container} >
                <Text style={styles.text} >{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles=StyleSheet.create({
    container:{
        backgroundColor: "#72063c",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8, 
        elevation: 2,
    },
    text:{
        color:"white"
    }
});