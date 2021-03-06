import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import styles from './styles'
import { Helpers, Metrics } from 'App/Theme'
import { Input, Button } from 'react-native-elements'
import NavigationService from 'App/Services/NavigationService'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={[Helpers.fillColMain, Metrics.horizontalPadding]}>
        <View style={[Helpers.column, Metrics.bottomMargin]}>
          <Input
            placeholder='Email'
            leftIcon={{ name: 'email'}}
          />
        </View>
        <View style={[Helpers.column, Metrics.bottomMargin]}>
          <Input
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={{ name: 'lock'}}
          />
        </View>
        <View style={[Helpers.column, Metrics.bottomMargin]}>
          <Button
            title="Sign In"
          />
        </View>
        <View style={[Helpers.column, Metrics.bottomMargin]}>
          <Button
            title="Sign Up"
            type="clear"
            onPress={() => NavigationService.navigate("SignupScreen")}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
