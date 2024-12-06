// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import Loginpage from './Loginpage'; // Ensure that Loginpage is imported correctly
// import { DefaultTheme } from 'react-native-paper';

// export default function Home() {
//   // Get colors from DefaultTheme
//   const { primary, background } = DefaultTheme.colors;

//   const Drawer = createDrawerNavigator();

//   const ProfileScreenWithDrawer = () => {
//     return (
//       <Drawer.Navigator
//         initialRouteName="Loginpage"
//         drawerContent={({ navigation, state }) => {
//           const focusedRouteName = state.routes[state.index].name; // Get the name of the currently focused route

//           return (
//             <DrawerContentScrollView>
//               <Text style={{ textAlign: "center" }}>Hello</Text>

//               <DrawerItem
//                 label="Loginpage"
//                 onPress={() => {
//                   navigation.navigate("Loginpage"); // Navigate to the Loginpage screen
//                 }}
//                 focused={focusedRouteName === 'Loginpage'} // Check if the current route is Loginpage
//                 activeBackgroundColor={primary} // Use the primary color for active state
//                 inactiveBackgroundColor={background} // Use the background color for inactive state
//                 activeTintColor={primary}
//                 inactiveTintColor={primary}
//               />

//               <DrawerItem
//                 label="Home"
//                 onPress={() => {
//                   navigation.navigate("Home"); // Navigate to the Home screen
//                 }}
//                 focused={focusedRouteName === 'Home'} // Check if the current route is Home
//                 activeBackgroundColor={primary} // Use the primary color for active state
//                 inactiveBackgroundColor={background} // Use the background color for inactive state
//                 activeTintColor={primary}
//                 inactiveTintColor={background}
//               />
//             </DrawerContentScrollView>
//           );
//         }}
//       >
//         <Drawer.Screen name="Loginpage" component={Loginpage} />
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Sudhakar</Text>
//       <ProfileScreenWithDrawer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
