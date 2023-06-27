import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from './Dashboard';
import {Me} from '../screens';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen
        name="Shelf Availability"
        component={Dashboard}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen
        name="item Info"
        component={Me}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen
        name="Pin Point"
        component={Dashboard}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen
        name="Settings"
        component={Dashboard}
        options={{
          headerTitle: '',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
