import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Tips from '../screens/Tips'
import Info from '../screens/Info'

import defaultNavigationOptions from './defaultNavigationOptions'
import {Colors} from '../constants'

const App = createBottomTabNavigator(
  {
    Tips: Tips,
    Home: Home,
    Info: Info,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: defaultNavigationOptions,
    cardStyle: {
      backgroundColor: Colors.defaultBackground,
    },
  },
)

export default App
