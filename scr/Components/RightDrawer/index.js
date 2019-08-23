/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';

// import { Container } from './styles';

export default class RightDrawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <ScrollView>
        <View style={{paddingTop: Platform.OS === 'ios' ? 50 : 10}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: '#0FF',
            }}
            onPress={this.navigateToScreen('Home')}>
            <Text>{'Home'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: '#0FF',
            }}
            onPress={this.navigateToScreen('InputTest')}>
            <Text>{'Teste de input'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
