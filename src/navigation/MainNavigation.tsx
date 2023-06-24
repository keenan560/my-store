import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welccome">
        <Stack.Screen name="welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
