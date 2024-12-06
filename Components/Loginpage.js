// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Loginpage = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (username === '' || password === '') {
//       Alert.alert('Error', 'Please enter both username and password');
//       return;
//     }

//     // Simulate a login request
//     const fakeToken = 'your_generated_token'; // Replace with the actual token from your API

//     try {
//       // Save the token to AsyncStorage
//       await AsyncStorage.setItem('userToken', fakeToken); // Consistent with App.js
//       setIsLoggedIn(true); // Update the logged-in state in App.js
//       Alert.alert('Success', 'Logged in successfully');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save token');
//     }
//   };

//   const checkAuthToken = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       if (token !== null) {
//         Alert.alert('Token Found', `Stored Token: ${token}`);
//       } else {
//         Alert.alert('No Token', 'No authentication token found');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to retrieve token');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Check Token" onPress={checkAuthToken} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//   },
// });

// export default Loginpage;





import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loginpage({ navigation }) {
  const handleLogin = async () => {
    // Simulate a login and store a token
    await AsyncStorage.setItem('userToken', 'dummyToken');
    navigation.replace('Home'); // Navigate to the Home screen after login
  };

  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
