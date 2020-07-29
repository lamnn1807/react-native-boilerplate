import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { Helpers } from 'App/Theme'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>Login</Text>
        </View>
      </View>
    )
  }
}
