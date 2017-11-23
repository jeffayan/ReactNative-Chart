/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BarChart from './BarChart'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const data = [
  {quarter: 21, earnings: 6, color : '#f2c94d'},
  {quarter: 22, earnings: 6, color : '#a52138'},
  {quarter: 23, earnings: 5, color : '#f2c94d'},
  {quarter: 24, earnings: 0, color : '#a52138'},
  {quarter: 25, earnings: 8, color : '#a52138'},
  {quarter: 26, earnings: 0, color : '#a52138'},
  {quarter: 27, earnings: 8, color : '#a52138'},
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BarChart data = {data} xAxis = 'quarter' yAxis = 'earnings' />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
