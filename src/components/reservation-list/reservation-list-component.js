// @flow

import React from 'react'
import {
  FlatList, SafeAreaView, StyleSheet, Text, View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  reservationView: {
    flex: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textLineLeft: { flex: 5 },
  textLineRight: { flex: 3 },
})

const renderItem = ({ item }: { item: any }) => {
  const name = `Name: ${item.name}`
  const hotel = `Hotel: ${item.hotelName}`
  const arrive = `Arrive: ${item.arrivalDate}`
  const depart = `Depart: ${item.departureDate}`
  return (
    <View style={styles.reservationView}>
      <View style={styles.row}>
        <Text style={styles.textLineLeft}>{name}</Text>
        <Text style={styles.textLineRight}>{arrive}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textLineLeft}>{hotel}</Text>
        <Text style={styles.textLineRight}>{depart}</Text>
      </View>
    </View>
  )
}

type Reservation = {
  arrivalDate: string,
  departureDate: string,
  hotelName: string,
  id: string,
  name: string,
}
type Props = { data: { reservations: Array<Reservation> } }
const ReservationList = ({ data: { reservations } }: Props) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={reservations}
      extraData={reservations}
      keyExtractor={(item: Reservation) => item.id}
      renderItem={renderItem}
      style={{ flex: 1 }}
    />
  </SafeAreaView>
)

export default ReservationList
