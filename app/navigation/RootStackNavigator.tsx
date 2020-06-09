import * as React from 'react';
import {ProfileScreen, LoginScreen} from 'screen';
import {
  Stack,
  RootStackParamList as RootStackParamListBase,
} from './RootStackNavigatorBase';

export type RootStackParamList = RootStackParamListBase;

export const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const RootStackNavigator = () => {
  return (
    <>
      <Screens />
    </>
  );
};

export default RootStackNavigator;
