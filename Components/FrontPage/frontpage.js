
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions
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

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').heigth;

class FrontPage extends React.Component {

   render() {
     console.log("Log", this.props);
     return (
         <Image
           source={require('../../assets/img/login-background4.jpg')}
           style={styles.backgroundImage}>
         <LogoImg />
         {/* <Login /> */}
        {/* <SocialIcon
          onPress={() => this.props.navigation.navigate('ProfilePage')}
         type='facebook'
         /> */}
       </Image>

     );
   }
 }

 const styles = StyleSheet.create({
   backgroundImage: {
     flex: 1,
     width: WINDOW_WIDTH,
     height: WINDOW_HEIGHT,
     backgroundColor:'transparent',
    //  justifyContent: 'center',
     alignItems: 'center',
    // justifyContent: 'center',

  }
 });
 // const SimpleApp = StackNavigator({
 //   Home: {screen: FrontPage },
 //   Profile: {screen: ProfilePage }
 // })

// export default StackNavigator({
//    Home: {screen: FrontPage },
//    Profile: {screen: ProfilePage }
//  });
//
 export default FrontPage
