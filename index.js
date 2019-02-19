// @flow

import { AppRegistry } from 'react-native'

import App from './src/App'
import { name as appName } from './src/app.json' // eslint-disable-line

AppRegistry.registerComponent(appName, () => App)
