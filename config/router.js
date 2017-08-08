import React from 'react';
import { StackNavigator } from 'react-navigation';

// These are the four we need
import FrontPage from '../Components/FrontPage/FrontPage.js';
import Feed from '../Components/DiscoverFeed/Feed.js';
import MyProjectPage from '../Components/MyProjectPage/MyProjectPage.js';
import ProfilePagex from '../Components/ProfilePage/ProfilePage.js';

// Should be able to delete this
import ProfilePage from '../Components/UserProfile/ProfilePage.js';
import ProjectPage from '../Components/ProjectPage/ProjectPage.js';
import Projects from '../Components/UserProfile/Projects.js';


export const MainStack = StackNavigator({
  FrontPage: {
    screen: FrontPage,
  },
  ProfilePagex: {
    screen: ProfilePagex,
  },
  MyProjectPage: {
    screen: MyProjectPage,
  },
  Feed: {
    screen: Feed,
  }
});
