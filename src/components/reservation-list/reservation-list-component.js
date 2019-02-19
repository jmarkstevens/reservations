// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

type Reservation = {
  arrivalDate: string,
  departureDate: string,
  hotelName: string,
  id: string,
  name: string,
}
type Props = { data: { reservations: Array<Reservation> } }
const ReservationList = ({ data: { reservations } }: Props) => {
  console.log('ReservationList props:', reservations)
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>This is the List Reservations Component</Text>
    </View>
  )
}

export default ReservationList
