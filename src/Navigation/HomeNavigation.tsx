import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationString from '../constant/navigation/NavigationString';
import NavigationScreen from '../constant/navigation/NavigationScreen';
import TabNavigator from './buttomtab/TabNavigator';




const screen = [
   {
    name :NavigationString.HOME,
    component:NavigationScreen.HomeScreen
   }
]

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
          name={'Tab'}
          component={TabNavigator}
     
        />
    {screen.map((sc) => {
      return (
        <Stack.Screen
          name={sc.name}
          component={sc.component}
          key={sc.name}
        />
      );
    })}
  </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})