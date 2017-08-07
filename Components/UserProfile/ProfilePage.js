import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import {
  Avatar,
  Tile
} from 'react-native-elements';

import SocialMedia from './SocialMedia.js'
import Projects from './Projects.js'

class ProfilePage extends React.Component {
  static navigationOptions = {
    title: 'ProfilePage',
  };
  render() {
    return (
      <ScrollView >
        <Tile
          imageSrc={require('../../assets/img/6835100-landscape.jpg')}
          featured
          title='Jatharsan Param'
          caption='Schulich School of Business - York University'
        />
        <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text> Quick bio </Text>
        <SocialMedia/>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectPage')} >
        <Projects />
        <Projects />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})



export default ProfilePage;
