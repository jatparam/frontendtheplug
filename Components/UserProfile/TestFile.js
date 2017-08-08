import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, SocialIcon } from 'react-native-elements';

class UserDetail extends Component {
  render() {

    return (
      <ScrollView>
        <Tile
          imageSrc={require('../../assets/img/6835100-landscape.jpg')}
          featured
          title='Hello'
          caption='Hello@gmail.com'
          icon={{name: 'play-circle', type: 'font-awesome'}}

        />


        <List>
          <ListItem
            title="Instagram"
            rightTitle='jatparam'
            hideChevron
          />
          <ListItem
            title="Twitter"
            rightTitle='jatparam'
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle='jatparam'
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle='May 24th'
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle='Toronto'
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
