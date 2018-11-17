import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'

import defaultNavigationOptions from './defaultNavigationOptions'
import {Colors} from '../constants'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
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
