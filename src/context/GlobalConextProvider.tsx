import React, {createContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import BackgroundService from 'react-native-background-actions';
const GlobalContext = createContext({});

const GlobalContextProvider = ({children}) => {
  // You need to provide a value prop to the context provider
  // I'm providing an empty object as an example, replace it with your actual state and functions
  const contextValue = {};

  async function startForegroundService() {
    // ReactNativeForegroundService.start({
    //   id: 1244,

    //   title: 'Foreground Service',
    //   message: 'We are live World',
    //   icon: 'ic_launcher',
    //   button: true,
    //   button2: true,
    //   buttonText: 'Button',
    //   button2Text: 'Anther Button',
    //   buttonOnPress: 'cray',
    //   setOnlyAlertOnce: 'true',
    //   color: '#000000',
    //   progress: {
    //     max: 100,
    //     curr: 10,
    //   },
    // });
    await BackgroundService.start(veryIntensiveTask, options);
  }

  const sleep = time =>
    new Promise(resolve => setTimeout(() => resolve(), time));

  const veryIntensiveTask = async taskDataArguments => {
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        await sleep(delay);

        await BackgroundService.updateNotification({
          taskDesc: 'Runned -> ' + i,
        });
      }
    });
  };

  const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    channelId: 'globalNotification',

    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#fff678',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
      delay: 1000,
    },
  };
  const stopService = async () => {
    await BackgroundService.stop();
  };
  useEffect(() => {
    startForegroundService();
    stopService()
  }, []);
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

const styles = StyleSheet.create({});
