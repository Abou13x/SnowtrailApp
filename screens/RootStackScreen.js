import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignOutScreen from './SignOutScreen';
import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignOutScreen" component={SignOutScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
