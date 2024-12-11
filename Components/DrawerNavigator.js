import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Details from './Details';
import ProductCard from './ProductCard';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          headerTitle: 'Subasu',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
         <Drawer.Screen
        name="Details"
        component={Details}
        options={{
          drawerLabel: 'Details',
          headerTitle: 'My Details',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

<Drawer.Screen
        name="AddProducts"
        component={ProductCard}
        options={{
          drawerLabel: 'Details',
          headerTitle: 'My Details',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
