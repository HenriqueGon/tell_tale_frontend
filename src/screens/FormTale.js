import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Api from '../services/Api';

export default function FormTale(tale) {
  const [name, setName] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [description, setDescription] = useState('');
  
  return (
    <View style={{ height: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        
        {urlImage !== '' ? 
          <ImageBackground source={{ uri: urlImage }}
            style={styles.image}>

            <Text style={styles.title}>
              {name}
            </Text>
          </ImageBackground>
        : null}

        <Text style={styles.label}>
          Nome:
        </Text>

        <TextInput value={name}
          onChangeText={setName}
          placeholder='Digite o nome do conto'
          style={styles.input} />
      
        <Text style={styles.label}>
          Url da Imagem:
        </Text>

        <TextInput value={urlImage}
          onChangeText={setUrlImage}
          placeholder='Digite a url da imagem'
          style={styles.input} />

        <Text style={styles.label}>
          Descrição:
        </Text>

        <TextInput value={description}
          onChangeText={setDescription}
          multiline={true}
          placeholder='Digite a descrição do conto'
          style={styles.inputDescription} />

        <Button title='Salvar'
          onPress={async () => {
            if (name.length <= 0) {
              return Alert.alert('O campo de nome deve ser preenchido!');
            }

            if (urlImage.length <= 0) {
              return Alert.alert('O campo de url da imagem deve ser preenchido!');
            }

            const res = await Api.post('tales/save', {
              name: name,
              urlImage: urlImage,
              description: description,
            });

            if (res.status === 201) {
              Alert.alert(res.text);

              setName('');
              setUrlImage('');
              setDescription('');
            }
          }} />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },  
  input: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#cecece',
    fontSize: 17,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputDescription: {
    height: 200,
    margin: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#cecece',
    fontSize: 17,
  },
  label: {
    fontSize: 17,
    paddingLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
  },
});