/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from 'app/src/App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
// import configureStore from 'app/src/configureStore';
// const store = configureStore();

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appStore from 'app/src/redux';

const configureStore = () => {
  let store = createStore(appStore, applyMiddleware(thunk));
  return store;
}

const AppRedux = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
