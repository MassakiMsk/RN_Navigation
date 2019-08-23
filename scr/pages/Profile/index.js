import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header
          {...{navigation, title: navigation.getParam('title', 'Profile')}}
        />
      ),
    };
  };

  handleClick = e => {
    e.preventDefault();

    const {navigation} = this.props;

    navigation.navigate('Profile2', {title: 'Perfil2'});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 240,
            borderWidth: 1,
            borderColor: '#00F',
          }}
          onPress={this.handleClick}>
          <Text>{'Ir para Perfil2'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
