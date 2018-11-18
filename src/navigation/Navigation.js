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
    Dicas: Tips,
    Inicio: Home,
    Informações: Info,
    slideScreen: slideScreen,
  },
  {
    initialRouteName: 'Inicio',

  },
)

export default App
