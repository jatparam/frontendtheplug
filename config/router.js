import React from 'react';
import { StackNavigator } from 'react-navigation';

import FrontPage from '../Components/FrontPage/FrontPage.js';
import Feed from '../Components/DiscoverFeed/Feed.js';
import MyProjectPage from '../Components/MyProjectPage/MyProjectPage.js';
import ProfilePage from '../Components/ProfilePage/ProfilePage.js';

export const MainStack = StackNavigator({
  FrontPage: {
    screen: FrontPage,
  },
  ProfilePage: {
    screen: ProfilePage,
  },
  MyProjectPage: {
    screen: MyProjectPage,
  },
  Feed: {
    screen: Feed,
  }
});
