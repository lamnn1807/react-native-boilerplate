import React, { Component } from 'react'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import ErrorBoundary from 'App/Components/ErrorBoundary'


class RootScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <ErrorBoundary>
          <AppNavigator/>
        </ErrorBoundary>
      </View>
    )
  }
}

RootScreen.propTypes = {
}


export default RootScreen
