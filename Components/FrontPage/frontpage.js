
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image
 } from 'react-native';

 import {
   Button,
   PricingCard,
   SearchBar,
   SocialIcon,
   List,
   ListItem
 } from 'react-native-elements';
 import { StackNavigator } from 'react-navigation';

import LogoImg from './Logo.js';
import Login from './Login.js';
import ProfilePage from '../UserProfile/ProfilePage'


class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: 'FrontPage',
  });
   render() {
     console.log("Log", this.props);
     return (
       <View>
         <LogoImg />
         <Login />
         <Button
           onPress={() => {
             this.props.navigation.navigate('Profile')
           }}
           title='Head to profile'  />
         {/* <SocialIcon
         title='Sign In With Facebook'
         button
         type='facebook'
         /> */}

       </View>
     );
   }
 }

 const SimpleApp = StackNavigator({
   Home: {screen: FrontPage },
   Profile: {screen: ProfilePage }
 })

// export default StackNavigator({
//    Home: {screen: FrontPage },
//    Profile: {screen: ProfilePage }
//  });
//
 export default SimpleApp
