import { StyleSheet, Text, View } from "react-native";
import Color from "../../constant/colors";

function GuessLog({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText} >#{roundNumber}</Text>
      <Text style={styles.itemText} >Opponent's Guess: {guess} </Text>
    </View>
  );
}
export default GuessLog;

const styles= StyleSheet.create({
  listItem:{
    borderColor: Color.primary800,
    borderWidth:1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  itemText:{
    fontFamily: 'open-sans'
  }
});
