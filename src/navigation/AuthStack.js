import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStack from './MyStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPass, Login, Otp, ResetPass, Splash, Walkthrough } from '../screens';

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      // initialRouteName='Login'
      screenOptions={{ headerShown: false, }}
    >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Walkthrough' component={Walkthrough} />
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Otp' component={Otp}/>
      <Stack.Screen name='ResetPass' component={ResetPass}/>
      <Stack.Screen name='ForgotPass' component={ForgotPass}/>
      <Stack.Screen name='MyStack' component={MyStack} />


    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})