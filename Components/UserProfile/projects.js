import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


// TODO Make sure diff photo dependent on project

class Projects extends Component {
  render() {
    return (
      <View>

        <Image source={require('../../assets/img/6835100-landscape.jpg')} />
        <Text> Project Title </Text>
      </View>
    );
  }
}


export default Projects;
