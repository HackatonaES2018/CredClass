import React, { Component } from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Instructions from '../screens/Instructions'
import Info from '../screens/Info'

import defaultNavigationOptions from './defaultNavigationOptions'
import {Colors} from '../constants'

const AppNavigator = createBottomTabNavigator(
  {
    Instructions: Instructions,
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

const App = createAppContainer(AppNavigator);

export default App
