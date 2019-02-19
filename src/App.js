// @flow

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import Navigator from './navigation'
import StaticClient from './graphql'

const { client } = new StaticClient()

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
)

export default App
