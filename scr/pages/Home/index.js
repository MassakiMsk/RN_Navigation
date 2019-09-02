import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.navigate('LeftSideMenu');
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header {...{navigation, title: 'Home', hideBack: true}} />,
    };
  };

  handleClick = e => {
    e.preventDefault();

    const {navigation} = this.props;

    navigation.navigate('VideoPlayerComponent', {title: 'video player'});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>{'Aplicativo de testes gerais'}</Text>

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
          <Text>{'Ir para Video Player'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
