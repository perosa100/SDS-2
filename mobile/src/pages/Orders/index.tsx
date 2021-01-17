import React from 'react'

import { Text, View, Image, StyleSheet } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import Logo from '../assets/deliveryman.png'
import Header from '../../components/Header'
import OrderCard from '../OrderCard'

const Orders: React.FC = () => {
  const handleOnPress = () => {}
  return (
    <>
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  }
})

export default Orders
