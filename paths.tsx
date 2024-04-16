import React from 'react';
import HomeScreen from './src/pages/HomeScreen';

type Path = {
  name: string;
  component: React.FC<any>;
  icon: string;
  iconFocused: string;
};

export const paths: Array<Path> = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'add-sharp',
    iconFocused: 'add-sharp',
  },
  {
    name: 'Meals',
    component: HomeScreen,
    icon: 'fish-outline',
    iconFocused: 'fish',
  },
  {
    name: 'Exercise',
    component: HomeScreen,
    icon: 'barbell-outline',
    iconFocused: 'barbell',
  },
];
