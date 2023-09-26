import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splashScreen/SplashScreen';
import Login from '../screen/authentication/login/Login';
import Home from '../screen/application/home/Home';
import SignUp from '../screen/authentication/signup/SignUp';
import ForgotPassword from '../screen/authentication/forgotPassword/ForgotPassword';
import ResetPassword from '../screen/authentication/resetPassword/ResetPassword';
import OTP from '../screen/authentication/otpVerify.js/OtpVerification';


const Stack = createNativeStackNavigator();

function Route() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="OTP" component={OTP} />

                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
export default Route