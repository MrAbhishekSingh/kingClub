import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Route from './src/navigations/Route'
import colors from './src/config/colors'

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} />
      <Route />
    </SafeAreaView>
  )
}

export default App