import React, { Component } from "react";
import { View, Text } from "react-native";

import TipList from '../../components/TipList'

import styles from "./styles";

export default class Tips extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TipList /> 
    );
  }
}
