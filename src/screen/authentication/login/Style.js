import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../../config/colors";

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
  },
  maincontainer: {
    flex: 1,
    height: (Dimensions.get('window').height / hp('100%')) * hp('100%'),
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: hp('30%'),
    padding: hp('4%'),
  },
  img: {
    height: hp('14%'),
    width: wp('24%'),
    resizeMode: 'contain',
  },
  inputbox: {
    flex: 1,
    marginTop: hp('4%'),
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: hp('50%'),
    width: wp('90%'),
    backgroundColor: colors.primary1,
    flexDirection: 'row',
    margin: hp('1%'),
    paddingVertical: hp('0.7%'),
    elevation: 10,
    borderWidth: wp('0.5%'), 
    borderColor: colors.primary2,
    shadowColor: '#000', // Set the shadow color to white (Android only)
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  btnText: {
    color: "#fff",
    fontFamily:'RobotoSlab-Bold',
    fontSize: hp('2.5%'),
    padding: wp('1.5%')
  },
  footerOr: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    fontFamily:'RobotoSlab-Regular',

  },
  footerText: {
    alignSelf: 'flex-end',
    fontSize: hp('2%'),
    fontFamily:'RobotoSlab-Medium',
    color:'#fff'

  },
  socialLogin: {
    width: wp('40%'),
    height: hp('10%'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logo: {
    height: hp('8%'),
    width: wp('8%'),
    resizeMode: 'contain'
  },
  btnSignup: {
    height: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontFamily:'RobotoSlab-Medium',
    fontSize: hp('2%'),
    color: '#fff'
  },
  acountText: {
    fontSize: hp('2%'),
    color: colors.primary,
    fontFamily:'RobotoSlab-Medium',

  },
  bottomline: {
    backgroundColor: '#0d709e',
    height: hp('1.5%'),
  }
});