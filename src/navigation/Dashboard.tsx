import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Me, HomeScreen, AskSam, MyTeam, Inbox} from '../screens';

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      activeColor="#2a74d5"
      barStyle={{backgroundColor: '#fff'}}
      initialRouteName="Home"
      screenOptions={{
        title: 'No',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="card-account-details-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ask Sam"
        component={AskSam}
        options={{
          tabBarLabel: 'Ask Sam',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Team"
        component={MyTeam}
        options={{
          tabBarLabel: 'My Team',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="email-open-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
