import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Hero from './Hero.js';
import Owner from './Owner.js';
import Collaborators from './Collaborators.js';
import ProjectInfo from './ProjectDetails/ProjectInfo.js';


// Where everything about the specific project will render
// TODO Render the ProjectDetails, get scrolling to work, connect to database
// TODO Location, Schedule

class ProjectPage extends Component {
  render() {
    return (
      <View>
        <Hero />
        <Owner />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePage')} >
        <Collaborators />
        </TouchableOpacity>
      </View>
    );
  }
}


export default ProjectPage;
