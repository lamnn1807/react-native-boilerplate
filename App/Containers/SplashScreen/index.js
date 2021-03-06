import React from 'react'
import { Text, View } from 'react-native'
import { StartupTime } from 'react-native-startup-time'
import styles from './styles'
import { Helpers } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import RNBootSplash from "react-native-bootsplash"

export default class SplashScreen extends React.Component {

  async componentDidMount() {
    RNBootSplash.hide()
    setTimeout(() => {
      NavigationService.navigateAndReset('AuthNavigator')
    }, 1000)
  }

  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
        </View>
        <StartupTime />
      </View>
    )
  }
}
