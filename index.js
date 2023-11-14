/**
 * @format
 */
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App.tsx';

// Register the service
ReactNativeForegroundService.register();
AppRegistry.registerHeadlessTask('SomeTaskName', () => require('./task/index'));
AppRegistry.registerComponent(appName, () => App);
