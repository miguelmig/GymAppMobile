/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';

import './global.css';
// import Navigator from './src/components/Navigator';

const Tab = createBottomTabNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {paths} from './paths';
import AuthScreen from './src/pages/AuthScreen';


type TabBarProps = {
  route: RouteProp<ParamListBase>;
  focused: boolean;
  color: string;
  size: number;
};

function TabBarIcon({route, focused, color, size}: TabBarProps) {
  let iconName = '';

  const routeDetails = paths.find(path => path.name === route.name);
  if (!routeDetails) {
    console.error('Missing Route', route.name);
    return <></>;
  }

  iconName = focused ? routeDetails.iconFocused : routeDetails.icon;

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={size} color={color} />;
}

function App(): React.JSX.Element {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <AuthScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            TabBarIcon({route, focused, color, size}),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        {paths.map(({name, component}) => {
          return <Tab.Screen key={name} name={name} component={component} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
