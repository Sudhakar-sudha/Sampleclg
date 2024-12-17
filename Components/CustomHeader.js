import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Menu } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

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
            />
          </TouchableOpacity>
        }
        contentStyle={styles.menuContent}
      >
        <Menu.Item
          onPress={() => {
            closeMenu();
            navigation.navigate('Home'); // Navigate to Profile Screen
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

const styles = StyleSheet.create({
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
      textAlign: 'center',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    menuContent: {
      backgroundColor: '#fff',
      borderRadius: 5,
    },
  });
  
export default CustomHeader;
