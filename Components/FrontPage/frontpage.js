
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

import LogoImg from './Logo.js';
import Login from './Login.js';



class FrontPage extends Component {
   render() {
     return (
       <View>
         <LogoImg />
         <Login />
         <SocialIcon
         title='Sign In With Facebook'
         button
         type='facebook'
         />
       </View>
     );
   }
 }



 export default FrontPage
