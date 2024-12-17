// import React, { useState } from 'react';
// import { View, Text, Button, Image, Alert } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import axios from 'axios';

// const ImageUploadForm = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [imageData, setImageData] = useState(null);

//   // Select image
//   const selectImage = () => {
//     launchImageLibrary(
//       { mediaType: 'photo', includeBase64: true },
//       (response) => {
//         if (response.didCancel) {
//           Alert.alert('Cancelled', 'Image selection cancelled');
//         } else if (response.errorMessage) {
//           Alert.alert('Error', response.errorMessage);
//         } else {
//           const { uri, base64, fileName, type } = response.assets[0];
//           setImageUri(uri);
//           setImageData({ base64, fileName, type });
//         }
//       }
//     );
//   };

//   // Upload image
//   const uploadImage = async () => {
//     if (!imageData) {
//       Alert.alert('Error', 'Please select an image first.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('file', {
//       uri: imageUri,
//       type: imageData.type,
//       name: imageData.fileName,
//     });

//     try {
//       const response = await axios.post('http://192.168.117.199:5000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log('Upload successful:', response.data);
//     } catch (error) {
//       console.error('Upload failed:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Button title="Select Image" onPress={selectImage} />
//       {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginVertical: 10 }} />}
//       <Button title="Upload Image" onPress={uploadImage} />
//     </View>
//   );
// };

// export default ImageUploadForm;



import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Alert, FlatList, StyleSheet, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { Buffer } from 'buffer';

const ImageUploadApp = () => {
  const [imageUri, setImageUri] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [name, setName] = useState("");

  const API_URL = 'http://192.168.117.199:5000';

  // Fetch uploaded images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/images`);
        setUploadedImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error.message);
        Alert.alert('Error', 'Failed to load images.');
      }
    };
    fetchImages();
  }, []);

  // Select image
  const selectImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: true },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Image selection cancelled');
        } else if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else {
          const { uri, base64, fileName, type } = response.assets[0];
          setImageUri(uri);
          setImageData({ base64, fileName, type });
        }
      }
    );
  };

  // Upload image
  const uploadImage = async () => {
    if (!imageData || !name) {
      Alert.alert('Error', 'Please select an image and provide a name.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', {
      uri: imageUri,
      type: imageData.type,
      name: imageData.fileName,
    });

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Alert.alert('Success', response.data.message);
      setUploadedImages((prev) => [...prev, response.data.image]); // Update uploaded images list
      setName('');
      setImageUri(null);
      setImageData(null);
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };

  // Render uploaded images
  const renderImageItem = ({ item }) => (
    <View style={styles.imageCard}>
      <Image
        source={{
          uri: `data:${item.image.contentType};base64,${Buffer.from(item.image.data.data).toString('base64')}`,
        }}
        style={styles.image}
      />
      <Text style={styles.imageName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={styles.title}>Image Upload App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Image Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginVertical: 10, alignSelf: 'center' }}
        />
      )}
      <Button title="Upload Image" onPress={uploadImage} />
      <Text style={styles.subtitle}>Uploaded Images</Text>
      <FlatList
        data={uploadedImages}
        renderItem={renderImageItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  imageCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  imageName: {
    fontSize: 16,
    color: '#555',
  },
});

export default ImageUploadApp;
