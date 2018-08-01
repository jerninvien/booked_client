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
    const { form, section, errorTextStyle } = styles;

    return (
      <View style={styles.container}>
        <Icon name='book' size={140} color='rgb(118, 184, 121)'/>

        <View style={form}>
          <Input
            label="Email Address"
            iconName='mail'
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            label='Password'
            iconName='lock'
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <Text style={errorTextStyle}>{error}</Text>
        </View>


        {!loading ?
          <View>
            <Button
              title="LOGIN"
              onPress={() => alert('Implement Login')}
              buttonStyle={{
                backgroundColor: 'rgb(118, 184, 121)',
                width: Dimensions.get('window').width * 0.7,
                height: 50,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 25,
              }}
              titleStyle={{
                fontSize: 14,
                fontWeight: '700'
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
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
});
