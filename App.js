
import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View,ScrollView,Image,  Button, Alert,ActivityIndicator,} from 'react-native';
import image from "./assets/konexio-logo_1.png"
export default function App() {
  const [showLoading, setShowloading] = useState(false)

  function onPressButton() {
    console.log("hello");
    Alert.alert("You clicked me")

    setShowLoading(true)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Text}>
      <Text style={styles.title}>
        Hello !
      </Text>
      <Text style={styles.title2}>
        Bonjour !
      </Text>
      <Text style={styles.title3}>
        হ্যালো !
      </Text>
      <Image source={{uri:"https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"}} style={styles.image} />
      <Image source={image} style={styles.image}/>
      <Button onPress={() => {Alert.alert('You clicked!')}} title="click" />
      <Button style={styles.button} onPress={() => { alert('click again'); setShowloading(true)}} title="Clique Me" />
        {showLoading && <ActivityIndicator size="small" color="#0000ff" />}

      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
     
    backgroundColor: 'blue',
    
  },
  Text: {
    backgroundColor: '#fff',
    marginTop: 80,
    width: 400,
    margin: 'auto'
  
    
  },
  title: {
    fontSize: 30
  },
  title2: {
    textAlign: 'center'
  },
  title3: {
    fontWeight: 'bold'
  },
  image: {
    width: 300,
    height: 100,
    margin: 'auto'
  },

  
});


