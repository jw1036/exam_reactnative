import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import MenuItem from '../components/MenuItem';

function UserMenuScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');

  return (
    <View>
      <MenuItem name="로그인" onPress={onLogin} />
      <MenuItem name="회원가입" onPress={onRegister} />
    </View>
  );
}

export default UserMenuScreen;
