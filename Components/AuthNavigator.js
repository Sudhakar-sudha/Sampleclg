import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './Loginpage';

const Stack = createStackNavigator();

export default function AuthNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loginpage"
        component={Loginpage}
        options={{
          headerShown: false, // Hides the header for the login screen
        }}
      />
    </Stack.Navigator>
  );
}
