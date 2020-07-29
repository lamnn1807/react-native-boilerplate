import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'

const { store } = createStore()

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
          <RootScreen />
      </Provider>
    )
  }
}
