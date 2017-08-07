import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import {
  SocialIcon
} from 'react-native-elements';


class SocialMedia extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.InnerContainer}>
          <SocialIcon
            type='instagram'
            />
            <Text> jatparam </Text>
        </View>
        <View style={styles.InnerContainer}>
          <SocialIcon
            type='twitter'
            />
            <Text> jatparam </Text>
        </View>
        <View style={styles.InnerContainer}>
          <SocialIcon
            type='youtube'
            />
            <Text> jatparam </Text>
        </View>
        <View style={styles.InnerContainer}>
          <SocialIcon
            type='soundcloud'
            />
            <Text> jatparam </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
  },
  InnerContainer: {
    flex: 1,
    flexDirection: 'column',
  }
})

export default SocialMedia;
