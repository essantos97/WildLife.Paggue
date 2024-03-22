import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../../src/App';
import QrCode from '../../src/components/telas/QrCode';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="QrCode" component={QrCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

