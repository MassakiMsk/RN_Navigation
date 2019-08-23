/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';

// import { Container } from './styles';

export default class BottomTabBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#0FF',
          }}
          onPress={this.navigateToScreen('StackNavigator')}>
          <Text>{'Home'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#0FF',
          }}
          onPress={this.navigateToScreen('AboutStack')}>
          <Text>{'About'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
