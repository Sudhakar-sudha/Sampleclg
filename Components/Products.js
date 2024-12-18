
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample product data
const products = [
  {
    id: '1',
    name: 'JssCrackers',
    description: 'It is a fireworks company',
    price: '$300',
    offer: '50%',
    delivery: '1 day',
    stars: '⭐⭐⭐⭐⭐',
    image: require('../assets/shoe1.jpg'),
  },
  {
    id: '2',
    name: 'JssCrackers',
    description: 'Quality fireworks for celebrations',
    price: '$400',
    offer: '40%',
    delivery: '2 days',
    stars: '⭐⭐⭐⭐',
    image: require('../assets/shoe2.jpg'),
  }, {
    id: '3',
    name: 'JssCrackers',
    description: 'It is a fireworks company',
    price: '$300',
    offer: '50%',
    delivery: '1 day',
    stars: '⭐⭐⭐⭐⭐',
    image: require('../assets/shoe1.jpg'),
  },
  {
    id: '4',
    name: 'JssCrackers',
    description: 'Quality fireworks for celebrations',
    price: '$400',
    offer: '40%',
    delivery: '2 days',
    stars: '⭐⭐⭐⭐',
    image: require('../assets/shoe2.jpg'),
  },
  // Add more product objects as needed
];

// Reusable Card Component
const ProductCardItem = ({ product }) => (
  <View style={styles.card}>
    <Image source={product.image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.offer}>Offer: {product.offer}</Text>
      <Text style={styles.delivery}>Delivery: {product.delivery}</Text>
      <Text style={styles.stars}>{product.stars}</Text>
      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="cart-outline" size={24} color="white" />
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Products = () => {
  return (
<FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ProductCardItem product={item} />}
  contentContainerStyle={styles.listContainer}
  numColumns={2} // Display two items per row
  columnWrapperStyle={styles.rowContainer} // Style for rows
  showsVerticalScrollIndicator={false} // Optional: Hides vertical scrollbar
/>


  );
};
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  rowContainer: {
    justifyContent: 'space-between', // Add spacing between items
    marginBottom: 15, // Space between rows
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    width: '48%', // Adjust width to fit two cards with spacing
    overflow: 'hidden', // Prevent content spill
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 5,
  },
  offer: {
    fontSize: 14,
    color: '#4caf50',
    marginBottom: 5,
  },
  delivery: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  stars: {
    fontSize: 14,
    color: '#fbc02d',
    marginBottom: 10,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  cartText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Products;
