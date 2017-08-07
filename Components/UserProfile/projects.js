import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';



// TODO Make sure diff photo dependent on project
// TODO get navigation working

class Projects extends Component {
  render() {
    return (
      <View>

      <Text> Project Title </Text>
      <Image source={require('../../assets/img/6835100-landscape.jpg')} />
      <Text style={styles.statusContainer}> InProgress </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusContainer: {
    backgroundColor: '#0000FF',
  }
})

export default Projects;
