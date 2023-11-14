import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import GlobalContextProvider from './src/context/GlobalConextProvider'
import HomeNavigation from './src/Navigation/HomeNavigation'
import AuthNavigation from './src/Navigation/AuthNavigation'
import theme from './src/Theme/Theme'

const App = () => {
const [token, setToken] = useState(true)

  return (
    <SafeAreaProvider >
    <NativeBaseProvider theme={theme}>
    <GlobalContextProvider>
       
      
            <StatusBar
              animated={true}
          
              barStyle="light-content"
              showHideTransition="slide"
              hidden={false}
            />
            <NavigationContainer>
    
                {token ? <HomeNavigation/> : <AuthNavigation />}
     
            </NavigationContainer>
  
 

      </GlobalContextProvider>
    </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})