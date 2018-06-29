import React from 'react';
import { StyleSheet, Text, View, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity,
    AsyncStorage} from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'


import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Profile1 from '../../../screens/Profile1'
import Maps from '../../../screens/Maps'
//import Profile3 from '../../../screens/Profile3'
import Chat from '../../../screens/Chat'

//import Product1 from '../../../screens/Product1'

import Options from './Options'



const Profile1Stack = createStackNavigator(
  {
    profile: {
      screen: Profile1,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const MapsStack = createStackNavigator(
  {
    profile: {
      screen: Maps,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)


const ChatStack = createStackNavigator(
  {
    profile: {
      screen: Chat,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)


const test = ({ focused, tintColor }) => (
  <Icon
    name="circle"
    type="entypo"
    size={26}
    color={focused ? tintColor : 'gray'}
  />
)

const HomeIcon= ({ focused, tintColor }) => (
  <Icon
    reverse
    name='home'
    type="entypo"
    size={26}
    color={focused ? tintColor : 'red'}
      //type='MaterialCommunityIcons'

  />
)

  const ProfileIcon= 
  ({ focused, tintColor }) => (
  <Icon
    reverse
    name='baidu'
    type="entypo"
    size={26}
    color={focused ? tintColor : 'red'}
      //type='MaterialCommunityIcons'

  />
)

  const GroupIcon= 
  ({ focused, tintColor }) => (
  <Icon
    reverse
    name='group'
    size={26}
    color={focused ? tintColor : 'red'}
      //type='MaterialCommunityIcons'

  />
)

const RootTabs = createBottomTabNavigator(
  {
    profile1: {
      screen: Profile1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: ProfileIcon,
      },
    },
    Maps: {
      screen: MapsStack,
      navigationOptions: {
        tabBarLabel: 'Maps',
        tabBarIcon: HomeIcon,
      },
    },

    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: GroupIcon,
      },
    },


  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'black' : 'gray',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 30,
        height: 30,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'profile1',
  }
)

HomeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
}

export default class ProfileLayout extends React.Component {
  render() {
    return (
      <RootTabs/>
    );
  }
}