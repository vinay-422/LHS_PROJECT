import { StatusBar, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';
import { ThemeProvider } from './src/commonconfig/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [data, setData] = useState();
  // const Gettingdata = async () => {
  //   const session = await AsyncStorage.getItem('userData')
  //   setData(JSON.parse(session));
  // }

  // useEffect(() => {
  //   Gettingdata()
  // }, [])

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer >
        <ThemeProvider>
          <MyStack />
          {/* {data ? <MyStack/>: <AuthStack />} */}
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})