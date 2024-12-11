// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import Loginpage from './Loginpage'; // Ensure that Loginpage is imported correctly
// import { DefaultTheme } from 'react-native-paper';

// export default function Home() {
//   // Get colors from DefaultTheme
//   const { primary, background } = DefaultTheme.colors;

//   const Drawer = createDrawerNavigator();

//   const ProfileScreenWithDrawer = () => {
//     return (
//       <Drawer.Navigator
//         initialRouteName="Loginpage"
//         drawerContent={({ navigation, state }) => {
//           const focusedRouteName = state.routes[state.index].name; // Get the name of the currently focused route

//           return (
//             <DrawerContentScrollView>
//               <Text style={{ textAlign: "center" }}>Hello</Text>

//               <DrawerItem
//                 label="Loginpage"
//                 onPress={() => {
//                   navigation.navigate("Loginpage"); // Navigate to the Loginpage screen
//                 }}
//                 focused={focusedRouteName === 'Loginpage'} // Check if the current route is Loginpage
//                 activeBackgroundColor={primary} // Use the primary color for active state
//                 inactiveBackgroundColor={background} // Use the background color for inactive state
//                 activeTintColor={primary}
//                 inactiveTintColor={primary}
//               />

//               <DrawerItem
//                 label="Home"
//                 onPress={() => {
//                   navigation.navigate("Home"); // Navigate to the Home screen
//                 }}
//                 focused={focusedRouteName === 'Home'} // Check if the current route is Home
//                 activeBackgroundColor={primary} // Use the primary color for active state
//                 inactiveBackgroundColor={background} // Use the background color for inactive state
//                 activeTintColor={primary}
//                 inactiveTintColor={background}
//               />
//             </DrawerContentScrollView>
//           );
//         }}
//       >
//         <Drawer.Screen name="Loginpage" component={Loginpage} />
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Sudhakar</Text>
//       <ProfileScreenWithDrawer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import  { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
export default function Home(onProductAdded) {
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