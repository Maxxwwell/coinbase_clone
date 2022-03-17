/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { LogBox } from 'react-native';
import Login from './app/screens/auth/Login/Login';
import Welcome from './app/screens/welcome/welcome';
import CreateAccount from './app/screens/auth/CreateAccount/CreateAccount';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Splash" component={Welcome}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login" component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="CreateAccount" component={CreateAccount}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
