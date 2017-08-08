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


import FrontPage from './Components/FrontPage/FrontPage.js';


import ProfilePagex from './Components/ProfilePage/ProfilePage.js';
import MyProjectPage from './Components/MyProjectPage/MyProjectPage.js';
import Feed from './Components/DiscoverFeed/Feed.js';

import { MainStack } from './config/router.js';

export default class TestProject extends Component {
  render() {
    return (
      <MainStack />
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
