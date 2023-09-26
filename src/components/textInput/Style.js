import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    countainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderWidth: wp('0.5%'),
        borderRadius: hp('50%'),
        width: wp('90%'),
        borderColor: colors.primary2,
        flexDirection: 'row',
        margin: hp('0.5%'),
        elevation: 5,
        borderColor: colors.primary2,
        shadowColor: '#000', // Set the shadow color to white (Android only)
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    img: {
        height: hp('6.5%'),
        width: wp('6.5%'),
        marginLeft: wp('4%'),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        height: hp('3.5%'),
        width: wp('55%'),
        margin: hp('1.5%'),
        padding: hp('0.3%'),
        fontSize: hp('2%'),
        color: '#ffff',
        fontFamily: 'RobotoSlab-Light',
    },
    errorText: {
        color: '#fff',
        fontSize: hp('2%'),
        alignSelf: 'center',
    }

});