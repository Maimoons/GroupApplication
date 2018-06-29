import React from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';


import { createStackNavigator } from 'react-navigation';


import LoginScreen from './app/components/LoginScreen';
import SecondScreen from './app/components/Profile/SecondScreen';
import ProfileLayout from './app/components/Profile/ProfileLayout';


import Signup from './app/components/Signup/Signup';





//import Images_firebase from './app/components/Images_firebase';
//import SecondScreen from './app/components/Images';






export default class App extends React.Component {

  

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loginScreen"
            component={LoginScreen}
            animation='fade'
            hideNavBar={true}
            initial={true}
          />
          <Scene key="secondScreen"
            component={SecondScreen}
            animation='fade'
            hideNavBar={true}
          />

          <Scene key="ProfileLayout"
            component={ProfileLayout}
            animation='fade'
            hideNavBar={true}
          />

          <Scene key="Signup"
            component={Signup}
            animation='fade'
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}