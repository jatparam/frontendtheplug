import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  View
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


          <View style={styles.herocontainer}>
            <View>
              <Avatar
                xlarge
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={styles.biotext}> This is where my one liner will be </Text>
            </View>
            <View>
              <SocialMedia/>
            </View>
          </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectPage')} >
        <Projects />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectPage')} >
        <Projects />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectPage')} >
        <Projects />
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  biotext: {
    color: '#0000FF',
  },
  herocontainer: {
    flex: 1,
    flexDirection: 'row',
  }
})



export default ProfilePage;
