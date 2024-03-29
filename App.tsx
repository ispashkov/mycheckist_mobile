import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {ThemeProvider} from 'react-native-elements'

import theme from 'theme'
import Proposal from 'screens/Proposal'

const AppNavigator = createStackNavigator({
  Home: Proposal,
})

const AppContainer = createAppContainer(AppNavigator)

const App: React.FC<{}> = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
)

export default App
