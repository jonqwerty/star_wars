import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="Character"
        component={CharacterScreen}
        options={{gestureEnabled: false, animation: 'none'}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default AppNavigator;
