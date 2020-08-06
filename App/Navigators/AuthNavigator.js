import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'App/Containers/LoginScreen'
import SignupScreen from 'App/Containers/SignupScreen'

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigator
