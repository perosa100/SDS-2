import React from 'react'
import { StyleSheet, View, Text, Alert, Linking } from 'react-native'
import { Order } from '../../type'
import { useNavigation } from '@react-navigation/native'
import OrderCard from '../OrderCard'
import Header from '../../components/Header'
import { RectButton } from 'react-native-gesture-handler'
import { confirmDelivered } from '../../services/api'

type Props = {
  route: {
    params: {
      order: Order
    }
  }
}

const OrderDetails = ({ route }: Props) => {
  const navigation = useNavigation()
  const { order } = route.params

  const handleConfirmDelivery = () => {
    confirmDelivered(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso`)
        navigation.navigate('Orders')
      })
      .catch(() => Alert.alert(`Erro ao confirmar o pedido ${order.id}!!`))
  }

  const handleStartNavigation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`
    )
  }

  const handleOnCancel = () => {
    navigation.navigate('Orders')
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans-Bold'
  }
})

export default OrderDetails
