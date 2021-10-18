import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { PropsWithChildren } from 'react';

import { HomeScreen } from '../screens/HomeScreen';
import { SnackScreen } from '../screens/SnackScreen';

type Props = PropsWithChildren<object>;

export const Stack = createStackNavigator();

export function NavigationProvider({ children }: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Snack" component={SnackScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
}
