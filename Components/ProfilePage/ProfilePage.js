import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

import Bar from './Bar.js';
import Header from './Header.js';
import PhotoGrid from './PhotoGrid.js';

class ProfilePagex extends Component {
  static navigationOptions = {
    title: 'ProfilePagex',
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Button onPress={() => this.props.navigation.navigate('MyProjectPage')}/>
        <PhotoGrid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    }
})

export default ProfilePagex;
