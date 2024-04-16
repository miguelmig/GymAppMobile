import React from 'react';
import {View} from 'react-native';

export default function TabButton({children}: any) {
  return (
    <View className="flex m-auto items-center text-white">{children}</View>
  );
}
 