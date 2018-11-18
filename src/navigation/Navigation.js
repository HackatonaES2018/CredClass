import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator, } from 'react-navigation'

import Home from '../screens/Home'
import Tips from '../screens/Tips'
import Info from '../screens/Info'
import slideScreen from '../components/slideScreen'

import defaultNavigationOptions from './defaultNavigationOptions'
import {Colors} from '../constants'

const App = createBottomTabNavigator(
  {
    Tips: Tips,
    Home: Home,
    Info: Info,
    slideScreen: slideScreen,
  },
  {
    initialRouteName: 'Home',

  },
)

export default App
