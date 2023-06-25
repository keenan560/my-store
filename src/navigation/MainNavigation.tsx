import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Microphone, FirstPin, ConfirmPin, SignIn} from '../screens';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welccome"
        screenOptions={{headerTitle: ''}}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="microphone" component={Microphone} />
        <Stack.Screen name="firstPin" component={FirstPin} />
        <Stack.Screen name="confirmPin" component={ConfirmPin} />
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
