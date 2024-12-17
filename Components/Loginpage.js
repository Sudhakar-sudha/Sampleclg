

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loginpage({ setIsLoggedIn }) {
  const handleLogin = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken');
    setIsLoggedIn(true); // Update authentication state
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
