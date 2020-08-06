import React from 'react'
import { PropTypes } from 'prop-types'
import { View, Text } from 'react-native'
import { Helpers } from 'App/Theme'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    if (!__DEV__) {
    //   Sentry.captureException(error)
      console.log(error, errorInfo)
    }
  }

  render() {

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={[Helpers.fillRowCenter]}>
          <Text>Something went wrong.</Text>
        </View>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary
