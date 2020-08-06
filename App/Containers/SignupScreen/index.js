import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import styles from './styles'
import { Helpers, Metrics } from 'App/Theme'
import { Input, Button } from 'react-native-elements'

export default class SignupScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={[Helpers.fillColMain, Metrics.horizontalPadding]}>
        <View style={[Helpers.column]}>
          <Input
            placeholder='Email'
            leftIcon={{ name: 'email'}}
          />
        </View>
        <View style={[Helpers.column]}>
          <Input
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={{ name: 'lock'}}
          />
        </View>
        <View style={[Helpers.column]}>
          <Button
            title="Sign Up"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
