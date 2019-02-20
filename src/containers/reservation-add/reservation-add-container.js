// @flow

import React from 'react'
import { graphql } from 'react-apollo'

import { createReservation } from '../../graphql/queries'
import ReservationAdd from '../../components/reservation-add'

const ReservationAddContainer = props => <ReservationAdd {...props} />

export default graphql(createReservation)(ReservationAddContainer)
