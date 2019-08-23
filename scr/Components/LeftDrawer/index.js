/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';

// import { Container } from './styles';

export default class LeftDrawer extends Component {
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
            onPress={this.navigateToScreen('Profile')}>
            <Text>{'Perfil'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
