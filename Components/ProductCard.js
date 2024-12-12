// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import {splashiconSet} from '../assets/icon.png'
// const ProductCard = () => {
//     return (

//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//         {/* <View style={styles.card}>
//             <Image source={{ uri: product.image }} style={styles.image} />
//             <View style={styles.details}>
//                 <Text style={styles.name}>{product.name}</Text>
//                 <Text style={styles.description}>{product.description}</Text>
//                 <Text style={styles.price}>${product.price}</Text>
//                 <Text style={styles.offer}>Offer: {product.offer}</Text>
//                 <Text style={styles.delivery}>Delivery: {product.delivery}</Text>
//                 <Text style={styles.stars}>⭐ {product.stars}</Text>
//                 <TouchableOpacity style={styles.cartButton}>
//                     <Ionicons name="cart-outline" size={24} color="white" />
//                     <Text style={styles.cartText}>Add to Cart</Text>
//                 </TouchableOpacity>
//             </View>
//         </View> */}
//         <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//     <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>   <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>   <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>   <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>   <View style={styles.card}>
//         <Image source={require('../assets/icon.png')} style={styles.image} />
//         <View style={styles.details}>
//             <Text style={styles.name}>JssCrackers</Text>
//             <Text style={styles.description}>It is a fireworks company</Text>
//             <Text style={styles.price}>$300</Text>
//             <Text style={styles.offer}>Offer:50%</Text>
//             <Text style={styles.delivery}>Delivery: 1 day</Text>
//             <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
//             <TouchableOpacity style={styles.cartButton}>
//                 <Ionicons name="cart-outline" size={24} color="white" />
//                 <Text style={styles.cartText}>Add to Cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//     </View>
//     </ScrollView>
//     );

    
// };

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         marginBottom: 10,
//         elevation: 3,
//     },  
//     scrollContainer: {
//         paddingVertical: 20, // Adds vertical padding inside the ScrollView
//         alignItems: 'center',
//       },
//     container: {
//         // flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//       },
//     image: {
//         width: '100%',
//         height: 150,
//     },
//     details: {
//         padding: 10,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: 14,
//         color: '#555',
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#e91e63',
//     },
//     offer: {
//         fontSize: 14,
//         color: '#4caf50',
//     },
//     delivery: {
//         fontSize: 14,
//         color: '#757575',
//     },
//     stars: {
//         fontSize: 14,
//         color: '#fbc02d',
//         marginBottom: 10,
//     },
//     cartButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#2196f3',
//         padding: 10,
//         borderRadius: 5,
//     },
//     cartText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         marginLeft: 5,
//     },
// });

// export default ProductCard;


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