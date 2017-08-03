/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

 class LogoImg extends Component {
   render() {
     return (
       <Image source={require('./assets/img/34481-200.png')} />
     );
   }
 }



 export default class TestProject extends Component {
   render() {
     return (
       <View style={styles.container}>
         <LogoImg />
         <Text style={styles.instructions}>
           Create. Connect
         </Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
     color: '#FFFFFF',
   },
   instructions: {
     textAlign: 'center',
     color: '#FFFFFF',
     marginBottom: 5,
   },
 });

 AppRegistry.registerComponent('TestProject', () => TestProject);
