import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  profile: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();
export const noHeaderOptions = {headerShown: false};
