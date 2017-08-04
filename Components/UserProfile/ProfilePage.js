import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import {
  Avatar
} from 'react-native-elements';

import SocialMedia from './SocialMedia.js'
import Projects from './Projects.js'

class ProfilePage extends Component {
  render() {
    return (
      <View>
        <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text> Quick bio </Text>
        <SocialMedia />
        <Projects />
      </View>
    );
  }
}


export default ProfilePage;
