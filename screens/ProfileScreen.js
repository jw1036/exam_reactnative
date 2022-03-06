import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Profile from '../components/Profile';

function ProfileScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId, displayName} = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: displayName,
    });
  }, [navigation, displayName]);

  return <Profile userId={userId} />;
}

export default ProfileScreen;
