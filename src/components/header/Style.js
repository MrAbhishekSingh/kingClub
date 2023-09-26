import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    countainer:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        // borderBottomWidth:2,
        // borderColor:'#fff'
    },
    textname:{
        color:'#fff',
        fontSize: hp('3.3%'),
        fontWeight:'300',
    },
    texttitle:{
        color:'#fff',
        fontSize: hp('3.3%'),
        fontWeight:'900',
    },
    container: {
        position: 'relative',
      },
      iconContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      },
      badge: {
        position: 'absolute',
        top: -8, // Adjust the position as needed
        right: -8, // Adjust the position as needed
        backgroundColor: 'red', // Badge background color
        borderRadius: 10, // Make it a circle
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      badgeText: {
        color: 'white', // Badge text color
        fontSize: 12,
        fontWeight: 'bold',
      },
 
});