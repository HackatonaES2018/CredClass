import { Dimensions } from 'react-native'

const viewWidth = Dimensions.get('window').width
const viewHeight = Dimensions.get('window').height

export default {
  window: {
    width: viewWidth,
    height: viewHeight,
    relativeWidth: value => viewWidth * value,
    relativeHeight: value => viewHeight * value,
  },
}
