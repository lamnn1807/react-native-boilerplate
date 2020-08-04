import React from 'react'
import { Header } from 'react-native-elements';
import NavigationService from 'App/Services/NavigationService'

const AppBar = ({title}) => {
  return (
    <Header
      placement="center"
      leftComponent={{ icon: 'menu', color: '#fff', onPress: () => NavigationService.toggleDrawer() }}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}

export default AppBar
