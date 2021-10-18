import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationProvider } from './providers/NavigationProvider';

export function App() {
  return (
    <NavigationProvider>
      <StatusBar style="auto" />
    </NavigationProvider>
  );
}
