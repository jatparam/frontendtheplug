import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import {
  Avatar
} from 'react-native-elements';

// Each Individual Collaborator
class OneCollab extends Component {
  render() {
    return (
      // TODO Make sure source img is unique to each user
      <View>
        <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}

// Group of Collaborators
class Collaborators extends Component {
  render() {
    return (
      <View>
        <OneCollab />
        <OneCollab />
        <OneCollab />
        <OneCollab />
        <OneCollab />
      </View>
    );
  }
}


export default Collaborators;
