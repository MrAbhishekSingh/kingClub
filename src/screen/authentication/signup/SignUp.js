import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import { styles } from './Style';
import { Formik } from 'formik';
import * as yup from 'yup'
import LinearGradient from 'react-native-linear-gradient';
import Inputbox from '../../../components/inputbox/InputBox';
import UserPhoto from '../../../components/userphoto/UserPhoto';
import colors from '../../../config/colors';
import Greeting from '../../../components/title/Title';

const SignUp = ({ navigation }) => {
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
        retypePassword: yup
            .string()
            .required('Please confirm your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),
        name: yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required("Please enter your name"),
    })
    return (
        <>
            <LinearGradient colors={[colors.primary, colors.primary1, colors.primary2]} style={styles.linearGradient}>
                <ScrollView style={{flexGrow:1}}>
                    <Formik
                        validationSchema={logiSchema}
                        initialValues={{ email: '', password: '', retypePassword: '', name: '' }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleSubmit, values, touched, errors }) => (
                            <>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.usericon}>
                                            <UserPhoto source={require('../../../assets/images/user.png')} />
                                        </View>
                                        <Greeting name='CREATE ' title='ACCOUNT' />
                                        <View style={styles.line} />
                                        <View style={{ marginTop: 25 }}>
                                            <Inputbox
                                                onChangeText={handleChange('name')}
                                                value={values.name}
                                                error={touched.name && errors.name}
                                                placeholder={'Your nickname'}
                                            />
                                            <Inputbox
                                                onChangeText={handleChange('email')}
                                                value={values.email}
                                                error={touched.email && errors.email}
                                                placeholder={'Enter your phone'}
                                            />
                                            <Inputbox
                                                onChangeText={handleChange('password')}
                                                value={values.password}
                                                error={touched.password && errors.password}
                                                placeholder={'Your password'}
                                                secureTextEntry={true}
                                            />
                                            <Inputbox
                                                onChangeText={handleChange('retypePassword')}
                                                value={values.retypePassword}
                                                error={touched.password && errors.retypePassword}
                                                placeholder={'Confirm password'}
                                                secureTextEntry={true}
                                            />
                                            <View style={styles.btncontainer}>
                                                <TouchableOpacity style={styles.btn} 
                                                // onPress={handleSubmit}
                                                onPress={() => navigation.navigate('OTP')}
                                                 >
                                                    <Image style={styles.logo} source={require('../../../assets/images/arrow.png')} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.btnSignup}>
                                            <Text style={styles.acountText}> have an Account? </Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                                <Text style={styles.signupText}> Sign in</Text>
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default SignUp