import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import { Card } from 'react-native-elements'
import DProjects from './DiscoverProjects.js'

class Feed extends Component {
  static navigationOptions = {
    title: 'Feed',
  };
  render() {
    return (
      <ScrollView>
        <DProjects />
        <DProjects />
        <DProjects />
        <DProjects />
        <DProjects />
      </ScrollView>
    );
  }
}


export default Feed;
