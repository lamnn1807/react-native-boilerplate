import * as React from 'react';
import { View , Linking} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    createDrawerNavigator
} from '@react-navigation/drawer';

import AppBar from 'App/Components/AppBar';


function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://google.com')}
        />
      </DrawerContentScrollView>
    );
  }

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Home" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Notifications"/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
