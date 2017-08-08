import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import ProjectImage from './ProjectImage.js'
import { Card } from 'react-native-elements'


// TODO Make sure diff photo dependent on project
// TODO get navigation working

class Projects extends Component {
  render() {
    return (
      <View>


      <Card
        title='Your Project Name'
        image={require('../../assets/img/6835100-landscape.jpg')}>
        <Text style={{marginBottom: 10}}>
          a video about some stuff
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='DETAILS'
          />
      </Card>


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
