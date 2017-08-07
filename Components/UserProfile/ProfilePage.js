import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


import {
  Avatar
} from 'react-native-elements';

import SocialMedia from './SocialMedia.js'
import Projects from './Projects.js'

class ProfilePage extends React.Component {
  static navigationOptions = {
    title: 'ProfilePage',
  };
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

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectPage')} >
        <Projects />
        </TouchableOpacity>
      </View>
    );
  }
}




export default ProfilePage;
