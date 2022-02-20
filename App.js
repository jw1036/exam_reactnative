import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import LogContext from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      <LogContext.Provider value={'안녕하세요'}>
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
}

export default App;
