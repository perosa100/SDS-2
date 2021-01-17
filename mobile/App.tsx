import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './src/components/Header'
import Home from './src/Home'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
