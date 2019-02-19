// @flow

import { createStackNavigator } from 'react-navigation'

import ReservationList from '../screens/reservation-list'
import ReservationAdd from '../screens/reservation-add'

const Routes = {
  rReservationList: { screen: ReservationList },
  rReservationAdd: { screen: ReservationAdd },
}

const NavigatorConfiguration = {
  initialRouteName: 'rReservationList',
  headerMode: 'none',
  mode: 'modal',
}

const StackNavigator = createStackNavigator(Routes, NavigatorConfiguration)

export default StackNavigator
