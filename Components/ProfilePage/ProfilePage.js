import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

import Bar from './Bar.js';
import Header from './Header.js';
import PhotoGrid from './PhotoGrid.js';

class ProfilePagex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
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
