import { StyleSheet } from "react-native";

import { Layout, Colors } from "../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
  cellContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 10,
    color: 'gray',
  },
  amountText: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default styles;
