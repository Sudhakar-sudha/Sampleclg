// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Components/Home';
// import Loginpage from './Components/Loginpage';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="Home"
//         component={Home}
//         options={{
//           drawerLabel: 'Home',
//           headerTitle: 'My Home',
//           drawerIcon: ({ size, color }) => (
//             <Ionicons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

// function AuthNavigator({ setIsLoggedIn }) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Loginpage"
//         component={Loginpage}
//         options={{
//           headerShown: false, // Hide header on the login screen
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in by checking stored token
//     const checkLoginStatus = async () => {
//       const token = await AsyncStorage.getItem('userToken');
//       if (token) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     };
//     checkLoginStatus();
//   }, []);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <DrawerNavigator /> // Show the drawer if logged in
//       ) : (
//         <AuthNavigator setIsLoggedIn={setIsLoggedIn} /> // Show the login screen if not logged in
//       )}
//     </NavigationContainer>
//   );
// }



import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './Components/DrawerNavigator';
import AuthNavigator from './Components/AuthNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token); // Set true if token exists, otherwise false
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DrawerNavigator /> // Show drawer navigation if logged in
      ) : (
        <AuthNavigator setIsLoggedIn={setIsLoggedIn} /> // Show login screen otherwise
      )}
    </NavigationContainer>
  );
}
