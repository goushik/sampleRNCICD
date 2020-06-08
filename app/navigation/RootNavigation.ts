import {createRef} from 'react';
import {RootStackParamList} from './RootStackNavigator';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

type GlobalParamList = keyof RootStackParamList;

export function navigate(name: GlobalParamList) {
  navigationRef.current?.navigate(name);
}
