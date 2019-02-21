import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ReservationListComponent from '../src/components/reservation-list'

describe('<ReservationListComponent>', () => {
  const Component = <ReservationListComponent data={{ refetch: jest.fn() }} />

  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
