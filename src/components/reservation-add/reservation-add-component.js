// @flow

import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

type Reservation = {
  arrivalDate: string,
  departureDate: string,
  hotelName: string,
  name: string,
}

type Props = {
  mutate: { variables: Reservation } => Promise<void>,
  navigation: NavigationScreenProp<void>,
}
class ReservationAdd extends React.Component<Props> {
  onSave = (): void => {
    const { mutate } = this.props
    mutate({
      variables: {
        arrivalDate: 'post.id',
        departureDate: 'newVote',
        hotelName: 'post.id',
        name: 'post.id',
      },
    }).then(() => {
      const { navigation } = this.props
      const { goBack } = navigation
      goBack()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button color="#fff" onPress={this.onSave} title="Save" />
      </View>
    )
  }
}

export default withNavigation(ReservationAdd)
