import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';

class HeroImage extends Component {
  render() {
    return (
      <Image style={styles.heroImageBackground} source={require('../../assets/img/backgrd.jpg')}>
        <View style={styles.heroImage}>
          <Text style={styles.title}> Title of Project </Text>
          <Text style={styles.about}> Description of Project </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  heroImageBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  heroImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
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

export default HeroImage;
