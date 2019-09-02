import React, {Component} from 'react';
import {View} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

export default class VideoPlayerComponent extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  componentDidMount() {
    Orientation.unlockAllOrientations();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <VideoPlayer
        source={{
          uri:
            'https://eus-streaming-video-msn-com.akamaized.net/c0567c5f-6f57-4dc4-9a7b-8791e49816ad/a89b3ef6-98d4-4f02-a6e4-e9b2fc51_2250.mp4',
        }}
        navigator={this.props.navigation}
        disableFullscreen
      />
    );
  }
}
