import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function FormTale() {
  const [name, setName] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [description, setDescription] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}> 
        Nome:
      </Text>

      <TextInput value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}> 
        Url Imagem:
      </Text>

      <TextInput value={urlImage}
        onChangeText={setUrlImage}
        style={styles.input}
      />

      <Text style={styles.label}>
        Descrição:
      </Text>

      <TextInput value={description}
        onChangeText={setDescription}
        multiline={true}
        style={styles.inputDescription}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1.3,
    borderRadius: 10,
    padding: 10,
  },
  inputDescription: {
    height: 150,
    margin: 12,
    borderWidth: 1.3,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 10,
  }
});