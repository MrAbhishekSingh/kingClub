import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { styles } from './../login/Style';
import { Formik } from 'formik';
import * as yup from 'yup'
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../../components/textInput/Input';
import colors from '../../../config/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
// import BottomLine from '../../components/bottomborderline/BottomLine';
import Icon from 'react-native-vector-icons/FontAwesome';
import Greeting from '../../../components/title/Title';




const OTP = ({ navigation }) => {
    const handleSubmit = (values, actions) => {

    }
    const logiSchema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
    })
    return (
        <>
            <LinearGradient colors={[colors.primary, colors.primary1, colors.primary2]} style={styles.linearGradient}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <Formik
                        validationSchema={logiSchema}
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleSubmit, values, touched, errors }) => (
                            <View style={styles.maincontainer}>
                                <View style={styles.imgContainer}>
                                    <Image style={styles.img} source={require('../../../assets/images/logo.png')} />
                                </View>
                                <Greeting name='OTP ' title='VERIFICATION' />
                                <View style={styles.inputbox}>
                                    <Input
                                        placeholder={'ENTER YOUR OTP'}
                                        source={'ellipsis-h'}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />
                                    <View >
                                        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={styles.btn}
                                        //  onPress={handleSubmit}
                                         >
                                            <Text style={styles.btnText}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.btnSignup}>
                                        <Text style={styles.acountText}>still Did't received OTP? </Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                            <Text style={styles.signupText}> Resend OTP</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.btnSignup}>
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                            <Icon name="arrow-left" size={30} color="#fff" />
                                        </TouchableOpacity>
                                    </View>
                                    {/* <View>
                                    <Text style={styles.footerOr}>OR</Text>
                                    <Text style={styles.footerText}>login with</Text>
                                </View> */}
                                    {/* <View style={styles.socialLogin}>
                                    <TouchableOpacity>
                                        <Image style={styles.logo} source={require('../../assets/images/facbook.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image style={styles.logo} source={require('../../assets/images/twitter.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image style={styles.logo} source={require('../../assets/images/google.png')} />
                                    </TouchableOpacity>
                                </View> */}
                                </View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </LinearGradient>
        </>
    )
};
export default OTP;