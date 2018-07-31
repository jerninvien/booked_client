import React, { Component } from 'react';
import {
  // Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Input,
  TextLink,
  Loading,
} from 'app/src/components/common';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';


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
      <View style={styles.container}>
        <Icon
          name='book'
          size={140}
          color='rgb(118, 184, 121)'
        />

        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
            <IconFeather
              name='mail'
              size={20}
              color='rgb(118, 184, 121)'
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="PASSWORD"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
            <IconFeather
              name='lock'
              size={20}
              color='rgb(118, 184, 121)'
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>
        </View>


        {!loading ?
          <View>
            <Button
              title="Login"
              // titleStyle={{ fontWeight: "700" }}
              onPress={() => alert('Implement Login')}
              buttonStyle={{
                backgroundColor: 'rgb(118, 184, 121)',
                width: Dimensions.get('window').width * 0.7,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 25
              }}
            />
            <Text
              onPress={() => alert('Implement forgot password page')}
              style={{
                color: "rgb(99, 99, 99)",
                fontSize: 16,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: "600"
              }}
            >
              Forgot your password?
            </Text>
          </View>
          :
          <Loading size={'large'} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  form: {
    width: '75%',
    // borderTopWidth: 1,
    // borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30
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
