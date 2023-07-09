import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from './Dashboard';
import {ItemInfo, ShelfAvailability, Pinpoint, Settings} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

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
        component={ShelfAvailability}
        options={{
          headerTitle: 'Shelf Availability',
          headerTitleStyle: {color: '#fff'},
          headerRight: () => (
            <MaterialCommunityIcons
              name="flash-outline"
              size={26}
              color="#fff"
              style={{marginRight: 16}}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="bookshelf" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Item Info"
        component={ItemInfo}
        options={{
          headerTitle: 'Item Information',
          headerTitleStyle: {color: '#fff'},
          headerRight: () => (
            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 16,
              }}>
              <MaterialCommunityIcons name="magnify" size={26} color="#fff" />
              <MaterialCommunityIcons
                name="printer-outline"
                size={26}
                color="#fff"
              />
            </View>
          ),
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="barcode-scan" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pin Point"
        component={Pinpoint}
        options={{
          headerTitle: 'Pinpoint',
          headerTitleStyle: {color: '#fff'},
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="map-marker" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
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
