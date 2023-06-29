import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from './Dashboard';
import {Me, ItemInfo} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Item} from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#2a74d5'},
        headerTitleAlign: 'left',
        headerTitle: 'Me@Walmart',
        headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'Me@Walmart',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="view-dashboard" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Shelf Availability"
        component={Dashboard}
        options={{
          headerTitle: 'Shelf Availability',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="bookshelf" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Item Info"
        component={ItemInfo}
        options={{
          headerTitle: 'Item Info',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="barcode-scan" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pin Point"
        component={Dashboard}
        options={{
          headerTitle: 'Pin Point',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="map-marker" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Dashboard}
        options={{
          headerTitle: 'Settings',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="cog" size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
