import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount = () => {
    console.log('AuthLoadingScreen.js CMD');
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() => {
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }, 2000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />

        <Text
          onPress={() => console.log('TEXTPRESS', Math.round(Math.random()*1000))}
          style={{ textAlign: 'center', fontSize: 40, marginTop: 30 }}
        >
          BOOKEDZZZ
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});