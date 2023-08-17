import {Text, StyleSheet} from 'react-native';
import Color from '../../constant/colors';

function Title({children}){
    return  <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles=StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: 'white',
        textAlign:'center',
        borderWidth: 2,
        borderColor: 'white',
        padding:12,
        borderRadius: 8,
    },
});