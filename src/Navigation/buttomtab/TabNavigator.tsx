import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/Home/HomeScreen';
import NavigationString from '../../constant/navigation/NavigationString';
import NavigationScreen from '../../constant/navigation/NavigationScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const tab = [
  {
    name: NavigationString.HOME,
    screen: NavigationScreen.HomeScreen,
    icon: {type: 'Entypo', name: 'home', color: 'black', size: 20},
  },
  {
    name: NavigationString.EConTact,
    screen: NavigationScreen.EContactScreen,
    icon: {
      type: 'MaterialIcons',
      name: 'contact-emergency',
      color: 'black',
      size: 20,
    },
  },
  {
    name: NavigationString.FindPhones,
    screen: NavigationScreen.FindPHoneScreen,
    icon: {
      type: 'MaterialIcons',
      name: 'phonelink-ring',
      color: 'black',
      size: 20,
    },
  },
  {
    name: NavigationString.Settings,
    screen: NavigationScreen.SettingsScreen,
    icon: {type: 'AntDesign', name: 'setting', color: 'black', size: 20},
  },
  {
    name: NavigationString.Support,
    screen: NavigationScreen.SupportScreen,
    icon: {
      type: 'MaterialIcons',
      name: 'contact-support',
      color: 'black',
      size: 20,
    },
  },
];

const TabIcon = ({type, name, color, size}) => {
  switch (type) {
    case 'Entypo':
      return <Entypo name={name} color={color} size={size} />;
    case 'AntDesign':
      return <AntDesign name={name} color={color} size={size} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} color={color} size={size} />;
    // Add cases for additional icon types as needed
    default:
      return null;
  }
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          backgroundColor: 'white', // Change the background color of the tab bar
          elevation: 10,
        },
        tabBarItemStyle: {
          elevation: 10,
        },
      }}>
      {tab.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.screen}
          options={{
            tabBarLabel: tab.name,
            tabBarIcon: ({color, size}) => (
              <TabIcon
                type={tab.icon.type}
                name={tab.icon.name}
                color={color}
                size={size}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
