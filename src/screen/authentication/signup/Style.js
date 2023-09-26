import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../../config/colors";

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  line:{
    backgroundColor:'#fff',
    height:hp('0.4%'),
    width:wp('35%'),
    alignSelf:'center',
    margin:hp('1%'),
    borderColor:'#fff'
  },
  logo: {
    height: hp('7.3%'),
    width: wp('14%'),
    resizeMode:'contain',
    alignSelf:'center'
  },
  btn:{
    borderRadius:hp('50%'),
    width:wp('16%'),
    height:hp('8%'),
    flexDirection:'column',
    justifyContent:'center',
    resizeMode:'contain',
    elevation: 10, 
    borderColor: colors.primary2,
    shadowColor: '#000', // Set the shadow color to white (Android only)
    shadowOffset: {
        width: 0,
        height: 0,
    },
  },
  btncontainer:{
    alignItems:'center',
    justifyContent:'center',
    height:hp('13%'),
  },
  btnSignup:{
    flexDirection:'row',
    justifyContent:'center',
    margin:hp('0.5%')
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
  usericon:{
    height:hp('23%'),
    justifyContent:'flex-end',
    marginBottom:hp('5%')
  }
});