import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

class PhotoGrid extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.photoGrid}>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../../assets/img/small.jpg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../../assets/img/small2.jpg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../../assets/img/small3.jpg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../../assets/img/small4.jpg')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  photoWrap: {
    margin: 7,
    height: 150,
    width: (Dimensions.get('window').width / 1.5) - 4
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  }
})

export default PhotoGrid;
