import React from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class SignupSection extends React.Component {


  signupPageFn = () => {
    //this.props.navigation.navigate('Signup');
    Actions.Signup();
}  


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}  onPress={this.signupPageFn}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
 


});
