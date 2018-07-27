import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
 import { ListItem } from 'react-native-elements';

console.log('ListItem', ListItem);

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
        leftAvatar={{
          size: "medium",
          source: {uri: item.picture.medium}
        }}
        onPress={() => console.log(`pressed: ${item.name.first}`)}
        subtitle={item.login.username}
        subtitleStyle={{
          opacity: 0.7
        }}
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
