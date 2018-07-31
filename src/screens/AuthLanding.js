import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Registration } from 'app/src/components';
// import { LoggedIn } from 'app/src/screens';

export class AuthLanding extends Component {
  // static navigationOptions = {
  //   title: 'Homez',
  // };

  state = {
  }

  componentDidMount = () => {
    console.log('AuthLanding.js CMD');
  }

  _goToHere = path => () => {
    this.props.navigation.navigate(path);
  }


  render() {
    const width = Dimensions.get('window').width;

    console.log('wdith iz', width);

    return (
      <View style={styles.container}>

        <View style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 20,
          // height: width/6,
          width: width,
          backgroundColor: 'rgb(94, 187, 114)',
        }}>
          <Icon
            name='book'
            size={120}
            color='white'
          />

          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: "600"
          }}>Welcome to Booked</Text>

          <Text style={{
            color: '#fff',
            fontSize: 20,
            textAlign: 'center'
          }}>Organising your side jobs has never been that easy!</Text>
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>

          <Button
            title="Continue with Facebook"
            // titleStyle={{ fontWeight: "700" }}
            onPress={() => alert('Implement FB login')}
            icon={
              <Icon
                name='facebook'
                size={20}
                color='white'
              />
            }
            buttonStyle={{
              backgroundColor: "rgba(62, 90,146, 1)",
              width: 250,
              height: 50,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 25
            }}
            containerStyle={{ marginTop: 20 }}
          />

          <Button
            title=" Continue with Email  "
            titleStyle={{
              color: 'rgba(99, 99, 99, 1)',
              fontWeight: '600'
            }}
            onPress={this._goToHere('SignIn')}
            icon={
              <Icon
                name='envelope'
                size={20}
                color='rgba(99, 99, 99, 1)'
              />
            }
            buttonStyle={{
              backgroundColor: "white",
              width: 250,
              height: 50,
              borderColor: "rgba(99, 99, 99, 1)",
              borderWidth: 2,
              borderRadius: 25
            }}
            containerStyle={{ marginTop: 20 }}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white'
  }
});


  // <Text
  //   onPress={this._goToHere('Registration')}
  //   style={{
  //     textAlign: 'center',
  //     fontSize: 30,
  //     // marginTop: 30,
  //   }}
  // >
  //   Register
  // </Text>
  // <Text
  // onPress={this._goToHere('SignIn')}
  //   style={{
  //     textAlign: 'center',
  //     fontSize: 30,
  //     // marginTop: 30,
  //   }}
  // >
  //   SignIn
  // </Text>
