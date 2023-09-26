import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { styles } from './Style';
import { Formik } from 'formik';
import * as yup from 'yup'
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../../components/textInput/Input';
import colors from '../../../config/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Greeting from '../../../components/title/Title';
// import BottomLine from '../../components/bottomborderline/BottomLine';



const Login = ({ navigation }) => {
    const handleSubmit = (values, actions) => {

    }
    const logiSchema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required('Please enter your password.')
            .min(8, 'Your password is too short.'),
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
                                <Greeting name='Welcome to ' title='PRO-STAR' />
                                <View style={styles.inputbox}>
                                    <Input
                                        placeholder={'USERNAME'}
                                        source={'phone'}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />
                                    <Input
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        source={'lock'}
                                        error={touched.password && errors.password}
                                        placeholder={'PASSWORD'}
                                        secureTextEntry={true}
                                    />
                                    <View style={{ marginHorizontal: widthPercentageToDP(5) }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ bottom: 10 }}>
                                            <Text style={styles.footerText}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View >
                                        <TouchableOpacity style={styles.btn} 
                                        // onPress={handleSubmit}
                                        onPress={() => navigation.navigate('Home')}
                                        >
                                            <Text style={styles.btnText}>SIGN IN</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.btnSignup}>
                                        <Text style={styles.acountText}>Don't have an Account? </Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                            <Text style={styles.signupText}> Sign Up</Text>
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
export default Login;