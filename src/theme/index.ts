import { colors, InputProps, Colors } from 'react-native-elements'

export interface Theme {
  Input: Partial<InputProps>
  colors: Colors
}

const theme: Theme = {
  Input: {
    containerStyle: {
      marginBottom: 16,
    },
  },
  colors,
}

export default theme
