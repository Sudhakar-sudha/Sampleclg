import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageUploadForm from './ImageUploadForm ';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Details screen!</Text>
      <ImageUploadForm/>
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
