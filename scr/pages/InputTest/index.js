import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import TextMask from '../../utils/TextMask';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class InputTest extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header
          {...{navigation, title: navigation.getParam('title', 'InputTest')}}
        />
      ),
    };
  };

  state = {
    cpf: '',
    selection: {start: 0, end: 0},
  };

  handleClick = e => {
    e.preventDefault();

    const {navigation} = this.props;

    navigation.navigate('Home', {title: 'Home'});
  };

  render() {
    const {cpf} = this.state;
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={{
              height: 50,
              width: 300,
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: '#05F',
              fontSize: 18,
            }}
            placeholder={'Cpf'}
            value={TextMask.cpf(cpf)}
            onChangeText={cpf => this.setState({cpf})}
          />
        </View>
      </>
    );
  }
}
