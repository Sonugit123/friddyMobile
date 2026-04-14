import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../../screens/dashboard/Dashboard';
import CustomDrawer from '../../components/customDrawer/CustomDrawer';
import Settings from '../../screens/setting/Settings';
import ChangePhoneNumber from '../../screens/accountSecurity/changeNumber/changePhoneNumber/ChangePhoneNumber';
import Trades from '../../screens/trades/Trades';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // disable default header
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
      {/* <Drawer.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} /> */}
      <Drawer.Screen name="Trades" component={Trades} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
