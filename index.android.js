/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



import FrontPage from './Components/FrontPage/FrontPage.js'
import ProjectPage from './Componenets/ProjectPage/ProjectPage.js'

export default class TestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProjectPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
