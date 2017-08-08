import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';

import { Card, Avatar } from 'react-native-elements'

class DProjects extends Component {
  render() {
    return (
      <View>
        <Card>
          <View style={styles.header}>
            <Avatar
              small
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              activeOpacity={0.7}
            />
            <Text style={{marginBottom: 10}}>
              Title of Project
            </Text>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../../assets/img/small.jpg')} />
          </View>
          <Text style={{marginBottom: 10}}>
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
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
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width) - 4
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  }
})

export default DProjects;
