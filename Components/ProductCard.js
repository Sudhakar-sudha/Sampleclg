

import React from 'react';
import  { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
export default function ProductCard(onProductAdded) {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    description: '',
    price: '',
    offer: '',
    delivery: '',
    stars: '',
});


const handleSubmit = () => {
  const { image, name, description, price, offer, delivery, stars } = product;

  if (!image || !name || !description || !price || !offer || !delivery || !stars) {
      Alert.alert('Error', 'All fields are required!');
      return;
  }

  onProductAdded(product);

  setProduct({
      image: '',
      name: '',
      description: '',
      price: '',
      offer: '',
      delivery: '',
      stars: '',
  });
};

  return (
    <View style={styles.container} >
      <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Product Image URL"
                value={product.image}
                onChangeText={(text) => setProduct({ ...product, image: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={product.name}
                onChangeText={(text) => setProduct({ ...product, name: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Product Description"
                value={product.description}
                onChangeText={(text) => setProduct({ ...product, description: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                value={product.price}
                onChangeText={(text) => setProduct({ ...product, price: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Offer"
                value={product.offer}
                onChangeText={(text) => setProduct({ ...product, offer: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Delivery Info"
                value={product.delivery}
                onChangeText={(text) => setProduct({ ...product, delivery: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Review Stars"
                keyboardType="numeric"
                value={product.stars}
                onChangeText={(text) => setProduct({ ...product, stars: text })}
            />
            <Button title="Add Product" onPress={handleSubmit} />
        </View>
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
  form: {
      padding: 10,
  },
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
  },

});