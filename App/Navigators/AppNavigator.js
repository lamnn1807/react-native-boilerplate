import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'App/Containers/SplashScreen'
import AuthNavigator from 'App/Navigators/AuthNavigator'
import MainNavigator from 'App/Navigators/MainNavigator'

export const navigationRef = React.createRef();

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator
