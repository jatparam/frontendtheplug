import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

class Hero extends Component {
  render() {
    return (
      <View>
        // TODO make image source one the user imports
        <Image source={require('../../assets/img/6835100-landscape.jpg')} />
      </View>
    );
  }
}


export default Hero;
