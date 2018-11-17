import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
