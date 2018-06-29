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

import UserInputSignup from './UserInputSignup';
import ButtonSubmitSignup from './ButtonSubmitSignup';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg from '../../images/eye_black.png';
import eyeImg_1 from '../../images/eye_black.png';

import { createStackNavigator } from 'react-navigation';

import {Actions, ActionConst} from 'react-native-router-flux';


const MARGIN = 40;
import spinner from '../../images/loading.gif';



export default class FormSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     comp:'signup',
      Andrew_Id: '',
      First_name:'',
      password:'',
      re_enter:'',
      showPass: true,
      press: false,


      showPass_re_enter: true,
      press_re_enter: false,
    };
    this.showPass = this.showPass.bind(this);
    this.showPass_re_enter = this.showPass_re_enter.bind(this);
  }

  showPass() {
    console.log('in 1')
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  showPass_re_enter() {
    console.log('in 2')
    this.state.press === false
      ? this.setState({showPass_re_enter: false, press_re_enter: true})
      : this.setState({showPass_re_enter: true, press_re_enter: false});
  }  

  

  onChangeTextHandler = (e) => {
  //console.log(e);
  this.props.onChangeText(e);

  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
       

        <UserInputSignup
          source={usernameImg}
          placeholder="Name"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeTextHandler= {this.onChangeTextHandler}

        />

         <UserInputSignup
          source={usernameImg}
          placeholder="Andrew_Id"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeTextHandler= {this.onChangeTextHandler}

        />

        <UserInputSignup
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeTextHandler= {this.onChangeTextHandler}

        />


        <UserInputSignup
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="re_enter"
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

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye_1}
          onPress={this.showPass}>
          <Image source={eyeImg_1} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  btnEye: {
    position: 'absolute',
    top: 0.175*DEVICE_HEIGHT,
    right: 28,
  },
  btnEye_1: {
    position: 'absolute',
    top: 0.258*DEVICE_HEIGHT,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});