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
import { StackNavigator } from 'react-navigation';


import FrontPage from './Components/FrontPage/FrontPage.js'
import ProjectPage from './Components/ProjectPage/ProjectPage.js'
import ProfilePage from './Components/UserProfile/ProfilePage.js'
import UserDetail from './Components/UserProfile/TestFile.js'

import ProfilePagex from './Components/ProfilePage/ProfilePage.js'
import MyProjectPage from './Components/MyProjectPage/MyProjectPage.js'

import { Basic } from './config/router.js';

export default class TestProject extends Component {
  render() {
    return (
      <FrontPage />
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

const SimpleApp = StackNavigator({
  Home: { screen: TestProject },
  Profile: {screen: ProfilePage }
})


AppRegistry.registerComponent('TestProject', () => TestProject);
