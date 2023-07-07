import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Microphone, FirstPin, ConfirmPin, SignIn} from '../screens';
import MyDrawer from './MyDrawer';
import {BarcodeScanner} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const MainNavigation = ({navigation}) => {
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
        <Stack.Screen
          name="dashboard"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="barcode-scanner"
          component={BarcodeScanner}
          options={{
            // headerLeft: ({canGoBack}) => (
            //   <TouchableOpacity onPress={() => canGoBack}>
            //     <MaterialCommunityIcons name="close" size={26} color="#fff" />
            //   </TouchableOpacity>
            // ),
            headerStyle: {backgroundColor: '#2a74d5'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
