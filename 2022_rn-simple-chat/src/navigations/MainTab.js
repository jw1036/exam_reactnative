import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, Profile } from '../screens';
import { ThemeContext } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTab = ({ navigation, route }) => {
  const theme = useContext(ThemeContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Channels',
      headerRight: () => (
        <MaterialIcons
          name="add"
          size={26}
          style={{ margin: 10 }}
          onPress={() => navigation.navigate('Channel Creation')}
        />
      ),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            ['Channels']: focused ? 'chat-bubble' : 'chat-bubble-outline',
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
      <Tab.Screen name="Channels" component={ChannelList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
