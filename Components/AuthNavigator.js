

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './Loginpage';

const Stack = createStackNavigator();

export default function AuthNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loginpage"
        options={{ headerShown: false }}
      >
        {() => <Loginpage setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
