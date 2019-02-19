// @flow

import React from 'react'

import ReservationList from '../../containers/reservation-list'

export default class ReservationListScreen extends React.PureComponent {
  static navigationOptions = (): { header: null } => ({ header: null })

  render() {
    return <ReservationList />
  }
}
