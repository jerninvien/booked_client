/** @format */

import React from 'react';
import {
  AppRegistry,
  NativeModules,
  Platform
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from 'app/src/App';
import { name as appName } from './app.json';
import appStore from 'app/src/reduxModules';

if (__DEV__ && Platform.OS === 'ios') {
  console.log('In __DEV__ mode');
  NativeModules.DevSettings.setHotLoadingEnabled(true);
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
  NativeModules.DevSettings.setLiveReloadEnabled(true);
}

const configureStore = () => {
  let store = createStore(appStore, applyMiddleware(thunk));
  return store;
}

const AppRedux = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent(appName, () => AppRedux);

// Potentially for build.gradle
// subprojects {
//     afterEvaluate {project ->
//         if (project.hasProperty("android")) {
//             android {
//                 compileSdkVersion 27
//                 buildToolsVersion '27.0.0'
//             }
//         }
//     }
// }
// configurations.all {
//     resolutionStrategy {
//         force 'com.android.support:support-v4:27.1.0'
//     }
// }

 // Potentially /android/app/build.gradle
 // android {
//    compileSdkVersion rootProject.ext.compileSdkVersion
//    buildToolsVersion rootProject.ext.buildToolsVersion
