import React from 'react'

import { Text, View, Image, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Logo from '../assets/deliveryman.png'
import Header from '../components/Header'

const Home: React.FC = () => {
  const handleOnPress = () => {}
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.title}>
          Acompanhe os pedidos e entregue no prazo!
        </Text>
        <Text style={styles.subTitle}>
          Receba todos os pedidos do seu restaurante na palma da sua mão
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>VER PEDIDOS</Text>
        </RectButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    alignItems: 'center',
    marginHorizontal: 15
  },
  title: {
    color: '#263238',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    marginTop: 31,
    textAlign: 'center'
  },
  subTitle: {
    color: '#9E9E9E',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
    textAlign: 'center'
  },
  footer: {
    marginTop: '5%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24
  }
})

export default Home
