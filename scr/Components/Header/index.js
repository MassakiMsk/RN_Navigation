/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackActions} from 'react-navigation';

// import { Container } from './styles';

export default class Header extends Component {
  handleDrawer = e => {
    e.preventDefault();

    const {navigation} = this.props;
    console.log(navigation);

    navigation.openRightDrawer();
  };

  handleDrawer2 = e => {
    e.preventDefault();

    const {navigation} = this.props;
    navigation.openLeftDrawer();
  };

  handleBack = e => {
    e.preventDefault();

    const {navigation} = this.props;
    const popAction = StackActions.pop({
      n: 1,
    });

    navigation.dispatch(popAction);
  };

  render() {
    const {title, hideBack} = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            marginTop: Platform.OS === 'ios' ? 40 : 0,
            paddingHorizontal: 20,

            height: 50,
            backgroundColor: '#F00',
          }}>
          <TouchableOpacity onPress={this.handleDrawer2}>
            <Icon name="person" size={50} color="#909" />
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{title}</Text>
          <TouchableOpacity onPress={this.handleDrawer}>
            <Icon name="menu" size={50} color="#909" />
          </TouchableOpacity>
        </View>

        {!hideBack && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,

              backgroundColor: '#0F0',
              height: 50,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={this.handleBack}>
              <Icon name="chevron-left" size={50} color="#900" />
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>{title}</Text>
          </View>
        )}
      </View>
    );
  }
}
