import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'

import TabNavigator from './src/navigation/TabNavigator'

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <TabNavigator />
  </ApplicationProvider>
)

export default App
