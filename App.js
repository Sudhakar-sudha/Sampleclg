import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'; // Ensure DefaultTheme is imported
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './Components/AuthNavigator';
import DrawerNavigator from './Components/DrawerNavigator';
import { View, Text } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196f3', // Customize your primary color
    accent: '#ff5722',  // Customize your accent color
  },
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {isLoggedIn ? (
          <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthNavigator setIsLoggedIn={setIsLoggedIn} />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}
