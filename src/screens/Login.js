import React, { Component, Fragment } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Input,
  TextLink,
  Loading,
} from 'app/src/components/common';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  componentDidMount = () => {
    console.log('Login.js CMD');
  }

  render() {
    const { email, password, error, loading } = this.state;
    const { button, form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button
              externalStyle={button}
              onPress={() => console.log('Button pressed')}
              title={'Login'}
            />

            :
            <Loading size={'large'} />}

        </View>
        <TextLink onPress={this.props.authSwitch}>
          Dont have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },

  button: {
    backgroundColor: 'green'
  }
});
