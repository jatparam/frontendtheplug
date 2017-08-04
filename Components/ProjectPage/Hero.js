import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';


// TODO make image source one the user imports
class Hero extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../assets/img/6835100-landscape.jpg')} />
      </View>
    );
  }
}


export default Hero;
