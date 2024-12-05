import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Components/Home';
import Loginpage from './Components/Loginpage';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{
            drawerLabel: 'Home',
            headerTitle: 'My Home',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Loginpage" 
          component={Loginpage} 
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
