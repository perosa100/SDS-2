import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Routes from './src/Routes'

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
