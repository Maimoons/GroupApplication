import React from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, ImageBackground,
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity,
  AsyncStorage} from 'react-native';


import bgSrc from '../images/wallpaper.png';

export default class Wallpaper extends React.Component {
  render() {
    return (
      <ImageBackground source={bgSrc} style={styles.backgroundImage}>

        {this.props.children}
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex : 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  }, 

});
