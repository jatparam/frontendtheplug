import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';




class Owner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Owner
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
});

export default Owner;
