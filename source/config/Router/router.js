// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import ListingScreen from '../../screens/ListingScreen';
import ListingDetailsScreen from '../../screens/ListingDetailsScreen';
import AccountScreen from '../../screens/AccountScreen';
import RentFormScreen from '../../screens/RentFormScreen';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="listings" component={ListingScreen} />
        <Stack.Screen name="listingDetail" component={ListingDetailsScreen} />
        <Stack.Screen name="rentForm" component={RentFormScreen} />
        <Stack.Screen name="account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
