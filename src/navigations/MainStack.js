import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Channel, ChannelCreation } from '../screens';
import { ThemeContext } from 'styled-components/native';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: theme.background },
        headerTintColor: theme.headerTintColor,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Channel Creation" component={ChannelCreation} />
      <Stack.Screen name="Channel" component={Channel} />
    </Stack.Navigator>
  );
};

export default MainStack;
