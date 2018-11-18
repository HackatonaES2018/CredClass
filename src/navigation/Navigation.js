import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator, } from 'react-navigation'

import Home from '../screens/Home'
import Tips from '../screens/Tips'
import Info from '../screens/Info'
import SlideScreen from '../screens/SlideScreen'

import defaultNavigationOptions from './defaultNavigationOptions'
import {Colors} from '../constants'

const Stack = createStackNavigator(
  {
    Info: Info,
    SlideScreen: SlideScreen,
  },
  {
    initialRouteName: 'Info',
  }
)

const App = createBottomTabNavigator(
  {
    Tips: Tips,
    Home: Home,
    Stack: Stack,
  },
  {
    initialRouteName: 'Home',

  },
)

export default App
