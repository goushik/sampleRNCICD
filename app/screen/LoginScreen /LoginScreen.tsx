import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/RootStackNavigator';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen = ({navigation}: Props) => {
  const onNavigateProfile = () => {
    navigation.navigate('profile');
  };
  return (
    <TouchableOpacity onPress={onNavigateProfile}>
      <Text style={{marginTop: '50%', textAlign: 'center'}}>LoginScreen</Text>
    </TouchableOpacity>
  );
};

export default LoginScreen;
