import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';

import {
  Input,
  Loading,
  TextLink,
  TouchableButton,
} from 'app/src/components/common';

import axios from 'axios';
import deviceStorage from 'app/src/services/deviceStorage';

export class Registration extends Component {
  state = {
    error: '',
    loading: false,
    pin_code: '',
    username: '',
  }

  _sendJoinOrCreateRequest = () => {
    const { pin_code, username } = this.state;
    const endpoint = pin_code.length > 0 ? 'users' : 'lab';

    console.log('pin_code', pin_code);
    console.log('usernmae', username);

    if (username.length == 0) {
      this.setState({
        error: 'Enter a name please'
      });
      return;
    }

    if (pin_code.length > 0 && pin_code.length !== 4) {
      this.setState({ error: 'Pin code must be 4 digits' });
      return;
    }

    this.setState({
      error: '',
      loading: true,
    });

    // NOTE HTTP is insecure, only post to HTTPS in production apps
    axios({
      method: 'POST',
      url: `http://0.0.0.0:3000/api/v1/${endpoint}`,
      data: {
        [endpoint]: {
          pin_code,
          name: username,
        }
      }
      }).then(res => {
        // Handle the Invite response here
        console.log('response is', res);

        this.props.setupLogin(res);
      }).catch(err => {
         // Handle Invite errors here
         console.log('error is 1', err);
         console.log('error is 2', err.message);

         this.setState({
           error: err.message || 'Invalid Pin Code',
           loading: false,
         });
         return err;
      });
  }

  render() {
    const {
      error,
      loading,
      pin_code,
      username,
    } = this.state;

    const {
      button,
      errorTextStyle,
      form,
      section,
    } = styles;

    const submitText = pin_code.length > 0 ?
      'Join an existing lab' :
      'Create a new lab';

    console.log('Registration Render state:', this.state);

    return (
      <View style={styles.container}>
        <View style={form}>
          <View style={section}>
            <Input
              onChangeText={username => this.setState({
                username,
                error: '',
              })}
              placeholder='Enter your name'
              value={username}
            />
          </View>

          <View style={section}>
            <Input
              keyboardType={'numeric'}
              maxLength={4}
              onChangeText={pin_code => this.setState({
                pin_code,
                error: '',
              })}
              placeholder='Enter pin code (optional)'
              value={pin_code}
            />
          </View>

          <Text style={errorTextStyle}>{error}</Text>

          {!loading ?
            <TouchableButton
              disabled={error !== ''}
              onPress={this._sendJoinOrCreateRequest}
              title={submitText}
            >
              {submitText}
            </TouchableButton>
            :
            <Loading />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    borderColor: '#ddd',
    borderTopWidth: 1,
    width: '100%',
  },
  section: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
  },
  hidden: {
    opacity: 0
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
  },
});
