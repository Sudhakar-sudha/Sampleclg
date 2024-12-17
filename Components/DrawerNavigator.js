// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home from './Home';
// import Details from './Details';
// import ProductCard from './ProductCard';
// import Products from './Products';

// const Drawer = createDrawerNavigator();

// // Custom Drawer Content
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       {/* User Profile Section */}
//       <View style={styles.profileContainer}>
//         <Image
//           source={require('../assets/dhanush.jpg')} // Ensure this path is correct
//           style={styles.profileImage}
//         />
//         <View style={styles.profileTextContainer}>
//           {/* <Text style={styles.userName}>Dhanush</Text> Display the user's name */}
//           <Text style={styles.userName}>Dhanush</Text>

//         </View>
//       </View>

//       {/* Default Drawer Items */}
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// export default function DrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//    <Drawer.Screen
//   name="Home"
//   component={Home}
//   options={{
//     drawerLabel: 'Home',
//     headerTitle: () => (
//       <Text style={styles.headerTitle}>Localify</Text>
//     ),
//     drawerIcon: ({ size, color }) => (
//       <Ionicons name="home-outline" size={size} color={color} />
//     ),
//     headerTitleAlign: 'center', // Ensures the title is centered
//     headerStyle: {
//       backgroundColor: '#2196f3', // Add a background color to the header
//     },
//     headerTintColor: '#fff', // Set the color of text and icons in the header
//   }}
// />

//       <Drawer.Screen
//         name="AddProducts"
//         component={ProductCard}
//         options={{
//           drawerLabel: 'Add Products',
//           headerTitle: 'Product Management',
//           drawerIcon: ({ size, color }) => (
//             <Ionicons name="add-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Products"
//         component={Products}
//         options={{
//           drawerLabel: 'Products',
//           headerTitle: 'Product List',
//           drawerIcon: ({ size, color }) => (
//             <Ionicons name="pricetag-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="User Details"
//         component={Details}
//         options={{
//           drawerLabel: 'Profile',
//           headerTitle: 'User Details',
//           drawerIcon: ({ size, color }) => (
//             <Ionicons name="person-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

// // Styles for the Custom Drawer Content
// const styles = StyleSheet.create({
//   profileContainer: {
//     flexDirection: 'row', // Aligns items horizontally
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f7f7f7', // Optional background color for the profile section
//     marginBottom: 10,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 10,
//   },
//   profileTextContainer: {
//     flex: 1, // Takes up remaining space
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//     headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center', // Center the text within the Text component
//   },
// });


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Menu } from 'react-native-paper';
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
          source={require('../assets/dhanush.jpg')} // Ensure this path is correct
          style={styles.profileImage}
          resizeMode="cover" // Use resizeMode as a prop
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.userName}>Dhanush</Text>
        </View>
      </View>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Custom Header Component
const CustomHeader = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Localify</Text>

      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={require('../assets/dhanush.jpg')} // Replace with user's profile image URI
              style={styles.profileImage}
              resizeMode="cover" // Use resizeMode as a prop
            />
          </TouchableOpacity>
        }
        contentStyle={styles.menuContent}
      >
        <Menu.Item
          onPress={() => {
            closeMenu();
            navigation.navigate('User Details'); // Navigate to Profile Screen
          }}
          title="Profile"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            navigation.navigate('Loginpage'); // Navigate to Login Screen (Logout action)
          }}
          title="Logout"
        />
      </Menu>
    </View>
  );
};

// Drawer Navigator
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: (props) => <CustomHeader {...props} />, // Use custom header
          drawerLabel: 'Home',
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
            <Ionicons name="pricetag-outline" size={size} color={color} />
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
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row', // Aligns items horizontally
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7', // Optional background color for the profile section
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#2196f3',
    height: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Center the text within the Text component
  },
  menuContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
