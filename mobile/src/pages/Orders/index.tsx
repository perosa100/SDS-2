import React, { useEffect, useState } from 'react'

import { Alert, StyleSheet, Text } from 'react-native'
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import OrderCard from '../OrderCard'
import { fetchOrders } from '../../services/api'
import { Order } from '../../type'
import { useIsFocused, useNavigation } from '@react-navigation/native'

const Orders = () => {
  const navigation = useNavigation()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setloading] = useState(false)
  const isFocused = useIsFocused()

  const fechtData = () => {
    setloading(true)
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => Alert.alert('Houve um erro ao buscar os pedidos'))
      .finally(() => setloading(false))
  }

  useEffect(() => {
    if (isFocused) {
      fechtData()
    }
  }, [isFocused])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order })
  }
  return (
    <>
      <ScrollView style={styles.container}>
        {loading ? (
          <Text> Buscando pedidos</Text>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Orders
