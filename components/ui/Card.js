import { View, StyleSheet } from "react-native";

import Color from "../../constant/colors";

function Card({children}){
    return(<View style={styles.card}>{children}</View>);
}
export default Card;

const styles=StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 36,
        backgroundColor: Color.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});