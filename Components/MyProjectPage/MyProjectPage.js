import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

import HeroImage from './HeroImage.js';
import PhotoGrid from './PhotoGrid.js';
import Collaborators from './Collaborators.js';

class MyProjectPage extends Component {
  static navigationOptions = {
    title: 'MyProjectPage',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner2}>
          <HeroImage />
        </ View>
        <View style={styles.inner1}>
          <Collaborators />
        </ View>
        <Button onPress={() => this.props.navigation.navigate('Feed')}/>
        <View style={styles.inner3}>
          <PhotoGrid  />
        </ View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    inner1: {
      flex: 0.5,
    },
    inner2: {
      flex: 2,
    },
    inner3: {
      flex: 3,
    }
})

export default MyProjectPage;
