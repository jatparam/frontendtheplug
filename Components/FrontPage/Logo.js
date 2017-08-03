import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';




class LogoImg extends Component {
  render() {
    return (
      <View>
      <Image source={require('../../assets/img/34481-200.png')} />
      <Text style={styles.instructions}>
        Create. Connect. Ya
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});

export default LogoImg;
