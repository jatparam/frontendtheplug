import React from 'react';
import { StackNavigator } from 'react-navigation';

import FrontPage from '../Components/FrontPage/FrontPage.js';
import ProfilePage from '../Components/UserProfile/ProfilePage.js';

export const Basic = StackNavigator({
  FrontPage: {
    screen: FrontPage,
  },
  ProfilePage: {
    screen: ProfilePage,
  },
});
