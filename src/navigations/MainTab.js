import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, Profile } from '../screens';
import { ThemeContext } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            ['Channel List']: focused ? 'chat-bubble' : 'chat-bubble-outline',
            ['Profile']: focused ? 'person' : 'person-outline',
          };
          return (
            <MaterialIcons name={icons[route.name]} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: theme.tabBarActiveTintColor,
        tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Channel List" component={ChannelList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
