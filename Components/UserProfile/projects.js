import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class Projects extends Component {
  render() {
    return (
      <View>
      // TODO Make sure diff photo dependent on project
        <Image source={require('../../assets/img/6835100-landscape.jpg')} />
        <Text> Project Title </Text>
      </View>
    );
  }
}


export default Projects;
