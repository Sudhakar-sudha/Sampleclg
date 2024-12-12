import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Details from './Details';
import ProductCard from './ProductCard';
import Products from './Products';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/dhanush.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.userName}> Dhanush</Text> {/* Replace with user's name */}
        </View>
      </View>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
        name="AddProducts"
        component={ProductCard}
        options={{
          drawerLabel: 'Add Products',
          headerTitle: 'Product Management',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerLabel: 'Products',
          headerTitle: 'Product List',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} /> // Changed to pricetag icon
          ),
        }}
      />
      
      <Drawer.Screen
        name="User Details"
        component={Details}
        options={{
          drawerLabel: 'Profile',
          headerTitle: 'User Details',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} /> // Changed to person icon
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Styles for the Custom Drawer Content
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row', // Aligns items horizontally
    alignItems: 'center',
    padding: 20,
    backgroundColor: '', // Optional background color for the profile section
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileTextContainer: {
    flex: 1, // Takes up remaining space
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
