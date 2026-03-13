import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/stackNavigator/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      {/* <StatusBar
        translucent={false}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      /> */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"   // use light-content if background is dark
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

export default App;
