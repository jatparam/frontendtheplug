import React, { Component } from 'react';
import {
  StyleSheet,
  View,
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
      <View style={styles.container}>
        <View style={styles.inner}>
            <OneCollab />
        </View>
        <View style={styles.inner}>
            <OneCollab />
        </View>
        <View style={styles.inner}>
            <OneCollab />
        </View>
        <View style={styles.inner}>
            <OneCollab />
        </View>
        <View style={styles.inner}>
            <OneCollab />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inner: {
    margin: 10,
  },
})

export default Collaborators;
