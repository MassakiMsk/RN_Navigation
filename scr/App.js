/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Routes from './routes';
import Orientation from 'react-native-orientation-locker';

export default class App extends Component {
  constructor() {
    super();

    Orientation.lockToPortrait();
  }

  render() {
    return <Routes />;
  }
}
