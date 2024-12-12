import React from 'react';
import  { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert ,Text} from 'react-native';
export default function Home() {


  return (
    <View style={styles.container} >
        <Text>Welcome to home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
)
  ;