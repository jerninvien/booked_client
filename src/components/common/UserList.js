import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
 import { ListItem } from 'react-native-elements';

export class UserList extends Component {

  static defaultProps = {
    users: []
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        chevron
        leftIconOnPress={() => console.log('log me')}
        leftAvatar={{ source: { uri: item.picture.thumbnail} }}
        onPress={() => console.log(`pressed: ${item.name.first}`)}
        roundAvatar
        scaleProps={{
          friction: 90,
          tension: 100,
          activeScale: 0.95,
        }}
        subtitle={item.login.username}
        title={`${item.name.first} ${item.name.last}`}
      />
    );
  }

  render() {
    const { users } = this.props;

    if (users.length == 0) {
      return null;
    }

    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={users}
        renderItem={this._renderItem}
      />
    );
  }
}
