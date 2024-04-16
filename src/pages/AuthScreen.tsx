import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

export default function AuthScreen() {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        animated={true}
        backgroundColor="#28525d"
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      <View className="bg-zinc-200">
        <View className="flex-2 w-full min-h-screen items-center justify-center flex-col">
          <Text className="text-xl rounded-xl ring-2 h-16 w-full text-center">
            Login
          </Text>
          <Text className="text-xl h-16">Password</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
