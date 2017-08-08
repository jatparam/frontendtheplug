import React from 'react';
import { StackNavigator } from 'react-navigation';

import FrontPage from '../Components/FrontPage/FrontPage.js';
import ProfilePage from '../Components/UserProfile/ProfilePage.js';
import ProjectPage from '../Components/ProjectPage/ProjectPage.js';
import Projects from '../Components/UserProfile/Projects.js';

export const Basic = StackNavigator({
  FrontPage: {
    screen: FrontPage,
  },
  ProfilePage: {
    screen: ProfilePage,
  },
  ProjectPage: {
    screen: ProjectPage,
  },
  Projects: {
    screen: Projects,
  }
});
