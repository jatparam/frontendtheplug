import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <Image style={styles.headerBackground} source={require('../../assets/img/backgrd.jpg')}>
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../../assets/img/profile.png')} />
          </View>
          <Text style={styles.name}> My Name </Text>
          <Text style={styles.about}> My One Liner </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#FFFFFF',
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  about: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
})

export default Header;
