import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class InputTest extends Component {
  handleClick = e => {
    e.preventDefault();

    const {navigation} = this.props;

    navigation.navigate('Home', {title: 'Home'});
  };

  render() {
    const {navigation} = this.props;
    return (
      <>
        <Header {...{navigation, title: 'InputTest', hideBack: true}} />
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
            <Text>{'Voltar para a Home'}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
