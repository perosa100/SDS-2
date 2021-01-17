import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Logo from '../../assets/logo.png'

const Header: React.FC = () => {
  const navigation = useNavigation()

  const handleOnPress = () => {
    navigation.navigate('Home')
  }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5c5c',
    height: 40,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'OpenSans-Bold'
  }
})

export default Header
