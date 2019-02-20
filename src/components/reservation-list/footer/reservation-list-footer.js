// @flow

import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    marginBottom: 3,
    paddingHorizontal: 10,
  },
})

type Props = { navigation: NavigationScreenProp<void> }
class Footer extends React.PureComponent<Props> {
  goToReservationAdd = (): void => {
    const { navigation } = this.props
    const { navigate } = navigation
    navigate('rReservationAdd')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#fff"
          onPress={this.goToReservationAdd}
          title="New Reservation"
        />
      </View>
    )
  }
}

export default withNavigation(Footer)
