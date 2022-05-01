import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { Spinner } from '../components';
import { ProgressContext, UserContext } from '../contexts';
import MainStack from './MainStack';
import { setOnAuthStateChanged } from '../utils/firebase';

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  const { user, dispatch } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = setOnAuthStateChanged(dispatch);
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {user?.email && user?.uid ? <MainStack /> : <AuthStack />}
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
