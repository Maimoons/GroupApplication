import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  KeyboardAvoidingView, 
    AsyncStorage
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../../images/left-arrow.png';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'


import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'

import Profile1 from '../../../screens/Profile1'
import Options from '../../../screens/Profile3/Options'

import ProfileLayout from './ProfileLayout'




const SIZE = 40;

export default class SecondScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    //console.log('in SecondScreen');
    //Actions.ProfileLayout();

    return (
      <ProfileLayout/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});