import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    countainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: wp('75%'),
        borderRadius: hp('50%'),
        flexDirection: 'row',
        margin: wp('1%'),
        borderWidth: wp('0.5%'), 
        elevation: 5, 
        borderColor: colors.primary2,
        shadowColor: '#000', // Set the shadow color to white (Android only)
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    
    img: {
        height: hp('5%'),
        width: wp('7%'),
        alignSelf: 'center',
        marginLeft: wp('4%'),
        resizeMode:'contain'
    },
    input: {
        height: hp('3.5%'),
        width: wp('55%'),
        margin: hp('1%'),
        padding: hp('0.3%'),
        fontSize: hp('2%'),
        // fontWeight:'400',
        fontFamily:'RobotoSlab-Light',
        color:'white',
        marginLeft: wp('4%'),
    },
    inputText: {
        color: '#fff',
        fontSize: hp('2%'),
        alignSelf: 'center',
    }

});