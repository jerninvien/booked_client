import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type Props = {
  pressHandler: func,
};

const TouchIDComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => console.log('Zest heres')}
        style={styles.welcome}
      >
        Welcome to React Native TouchIDz!
      </Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <TouchableHighlight onPress={props.pressHandler}>
        <Text>Authenticate with Touch ID</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default TouchIDComponent;
