import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Registration } from 'app/src/components';
import { LoggedIn } from 'app/src/screens';

export class AuthLanding extends Component {
  state = {
  }

  componentDidMount = () => {
    console.log('Auth.js CMD');
  }

  _goToHere = path => () => {
    this.props.navigation.navigate(path);
  }


  render() {
    return(
      <View style={styles.container}>
      <Text
        onPress={this._goToHere('Registration')}
        style={{ textAlign: 'center', fontSize: 40, marginTop: 30 }}
      >
        BOOKED1 Registration
      </Text>

      <Text
      onPress={this._goToHere('SignIn')}
        style={{ textAlign: 'center', fontSize: 40, marginTop: 30 }}
      >
        BOOKED2 SignIn
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});
