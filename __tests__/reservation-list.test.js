import { FlatList } from 'react-native'
import React from 'react'
import { expect as expectChai } from 'chai'
import { shallow } from 'enzyme'
import ReservationListComponent from '../src/components/reservations/reservation-list'

const reservations = [
  {
    id: 'testid',
    name: 'Mark Stevens',
    hotelName: 'Hilton San Diego',
    arrivalDate: '02/20/2019',
    departureDate: '02/21/2019',
  },
]

describe('<ReservationListComponent>', () => {
  const Component = <ReservationListComponent data={{ refetch: jest.fn(), reservations }} />

  const wrapper = shallow(Component)

  it('Flatlist length is 1', () => {
    expectChai(wrapper.find(FlatList).length).to.equal(1)
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
