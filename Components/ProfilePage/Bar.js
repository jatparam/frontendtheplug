import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

class Bar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <View style={[styles.barItem, styles.barseparator]}>
          <Text style={styles.name}> My Name </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})

export default Bar;
