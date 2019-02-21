import 'react-native'
import React from 'react'
// import { expect as expectChai } from 'chai'
import { shallow } from 'enzyme'
import ReservationAddComponent from '../src/components/reservations/reservation-add'

describe('<ReservationAddComponent>', () => {
  const Component = <ReservationAddComponent />

  const wrapper = shallow(Component)

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
