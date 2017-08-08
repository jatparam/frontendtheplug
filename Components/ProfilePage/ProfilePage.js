import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Button,
} from 'react-native-elements';


import Header from './Header.js';
import PhotoGrid from './PhotoGrid.js';

class ProfilePage extends Component {
  static navigationOptions = {
    title: 'ProfilePage',
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

export default ProfilePage;
