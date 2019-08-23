import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class About extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header
          {...{
            navigation,
            title: navigation.getParam('title', 'InputTest'),
            hideBack: true,
          }}
        />
      ),
    };
  };

  render() {
    return (
      <View>
        <Text>{'About'}</Text>
      </View>
    );
  }
}
