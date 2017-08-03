
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
   SideMenu,
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
       </View>
     );
   }
 }



 export default FrontPage
