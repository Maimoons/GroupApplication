import React from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';


import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Animated,
  Easing,TextInput

} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

import { createStackNavigator } from 'react-navigation';

import {Actions, ActionConst} from 'react-native-router-flux';


const MARGIN = 40;
import spinner from '../images/loading.gif';



export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  

  onChangeTextHandler = (e) => {
  this.props.onChangeText(e);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="AndrewId"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeTextHandler= {this.onChangeTextHandler}

        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeTextHandler= {this.onChangeTextHandler}

        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 0.09*DEVICE_HEIGHT,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});