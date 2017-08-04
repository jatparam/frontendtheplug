import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import {
  SocialIcon
} from 'react-native-elements';


class SocialMedia extends Component {
  render() {
    return (
      <View>
        <SocialIcon
          type='instagram'
        />
        <SocialIcon
          type='twitter'
        />
        <SocialIcon
          type='youtube'
        />
        <SocialIcon
          type='soundcloud'
        />
      </View>
    );
  }
}

export default SocialMedia;
