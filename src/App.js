/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // Initial structure and code taken from:
 // https://medium.com/@njwest/building-a-react-native-jwt-client-efacf78b9364
 // https://medium.com/@njwest/building-a-react-native-jwt-client-api-requests-and-asyncstorage-d1a20ab60cf4

import React, { Component, Fragment } from 'react';
import {
  AppState,
  // AsyncStorage,
  Button,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


import { Loading } from 'app/src/components/common/';

// import { Registration } from 'app/src/components';
import { LoggedIn, Registration } from 'app/src/screens/';

import { deviceStorage } from 'app/src/services/';
import axios from 'axios';

// import Base from 'app/src/index';
// import IntroScreen from 'app/src/components/introscreen.js';

if (__DEV__) {
  console.log('In __DEV__ mode');
  NativeModules.DevSettings.setHotLoadingEnabled(true);
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
  NativeModules.DevSettings.setLiveReloadEnabled(true);
}

export default class App extends Component {
  state = {
    // showRegisterScreen: true,
    appState: AppState.currentState,
    currentUser: null,
    devices: [],
    invite_codes: [],
    lab: {},
    loading: true,
    message: 'Checking account status...',
    users: [],
  }

  componentDidMount = () => {
    console.log('App.js componentDidMount');
    AppState.addEventListener('change', this._handleAppStateChange);

    deviceStorage.loadItem('api_key')
      .then(res => {
        if (res !== null) {
          this._makeInitialLabRequest(res);
        } else {
          this.setState({
            loading: false,
            message: 'Create account or login',
          });
        }
    }).catch(err => {
      console.log("deviceStorage.loadItem('api_key') err", err);
    });
  }

  componentWillUnmount() {
    console.log('App.js componentWillUnmount');
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _makeInitialLabRequest = res => {
    console.log('_makeInitialLabRequest', res);
    const headers = {
      'X-USER-TOKEN': res
    };

    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/lab',
      headers,
    }).then(res => {
      console.log('success here', res);

      this.setState({
        ...res.data,
        // showRegisterScreen: false,
        loading: false,
        message: '',
      });
    }).catch(err => {
      this.setState({
        // showRegisterScreen: true,
        loading: false,
        message: 'Create a lab or join one',
      });
    });
  }

  _handleAppStateChange = nextAppState => {
    // console.log('_handleAppStateChange nextAppState', nextAppState);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  }

  _setupLogin = response => {
    console.log('this is 1', response);

    const { currentUser } = response.data;

    deviceStorage.saveItem('api_key', currentUser.api_key)
      .then(res => {
        console.log('res iz???', res);
      }).catch(err => {
        console.log("deviceStorage.saveItem('api_key', current_user.api_key) ERROR", err);
      });


    this.setState({
      loading: false,
      message: '',
      // showRegisterScreen: false,
      ...response.data,
    });
  }

  render() {
    const {
      // lab,
      // showRegisterScreen,
      currentUser,
      devices,
      error,
      invite_codes,
      loading,
      message,
      users,
    } = this.state;

    console.log('App.js Render state:', this.state);

    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor='steelblue'
           barStyle='dark-content'
        />

        <View style={styles.OvalShapeView}>
          <Text
            style={{
              alignItems: 'flex-start',
              color: 'white',
              flex: 1,
              fontSize: 14,
              fontWeight: 'bold',
              // justifyContent: 'center',
            }}
          >
            BACK
          </Text>

          <Text
            style={{
              alignItems: 'center',
              color: 'white',
              flex: 1,
              fontSize: 20,
              fontWeight: 'bold',
              // justifyContent: 'center',
            }}
          >
            Register
          </Text>
        </View>

        {!currentUser &&
          <Fragment>
            <Text
              onPress={() => console.log('TEXTPRESS', Math.round(Math.random()*1000))}
              style={{
                textAlign: 'center',
                fontSize: 40,
                marginTop: 30,
              }}>
              BOOKED
            </Text>

            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              {message}
            </Text>

            <Button
              title="LOGOUT USER"
              onPress={() => {
                deviceStorage.deleteItem("api_key");
                this.setState({ currentUser: null });
              }}
              />

          {!loading ? <Registration setupLogin={this._setupLogin} /> : <Loading />}
          </Fragment>

        }

        {currentUser && <LoggedIn currentUser={currentUser} />}
      </View>
    );

  }
}

// {!currentUser && !loading ?
//   <Registration setupLogin={this._setupLogin} /> :
//   <Loading />
// }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  OvalShapeView: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(118, 184, 121, 1.0)',
    // borderRadius: 50,
    // transform: [
    //   {scaleX: 2}
    // ]
  }
});
