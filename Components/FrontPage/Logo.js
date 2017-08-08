import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Ionicons';




class LogoImg extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/img/34481-201.png')} style={styles.image}/>
        <View style={styles.text}>
          {/* <TextInput
            style={[styles.button, {textAlign: 'left', color: 'black', fontFamily: 'Arial', fontSize: 15}]}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
          />
          <TextInput
            style={[styles.button, {textAlign: 'left', color: 'black', fontFamily: 'Arial', fontSize: 15}]}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          /> */}
          <View style={styles.button}>
            <Icon style={styles.searchIcon} name="ios-person" size={20} color="black"/>
            <TextInput
              style={{marginLeft: 30, textAlign: 'left', color: 'black', fontFamily: 'Arial', fontSize: 15}}
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.button}>
            <TextInput
              style={{marginLeft: 30, textAlign: 'left', color: 'black', fontFamily: 'Arial', fontSize: 15}}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.login_button}>
              <Text style={{textAlign: 'center', color: 'black', fontFamily: 'Arial', fontSize: 15, fontWeight: 'bold'}}>
                Login
              </Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginBottom: 150,
  },
  text: {
    marginTop: 10,
  },
  searchIcon: {
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor:'white',
    width: 250,
    borderRadius: 25,
    opacity: 0.7,
  },
  login_button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor:'#83e2a6',
    width: 250,
    borderRadius: 25,
    opacity: 0.7
  },
});

export default LogoImg;
