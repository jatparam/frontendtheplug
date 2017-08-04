import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Hero from './Hero.js';
import Owner from './Owner.js';
import Collaborator from './Collaborators.js';
import ProjectInfo from './ProjectDetails/ProjectInfo.js';


// Where everything about the specific project will render
// TODO Render the Hero IMG, Owner Bar, Collaborator Bar, and ProjectDetails

class ProjectPage extends Component {
  render() {
    return (
      <View>
        <Hero />
        <Owner />
        <Collaborators />
      </View>
    );
  }
}


export default ProjectPage;
