import React, { useState } from 'react';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Api from '../services/Api';

export default function FormChapter(routes) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const tale = routes.route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        <Text style={styles.label}>
          Título:
        </Text>

        <TextInput value={title}
          onChangeText={setTitle}
          placeholder='Digite o título do capítulo'
          style={styles.input} />

        <Text style={styles.label}>
          Conteúdo:
        </Text>

        <TextInput value={content}
          onChangeText={setContent}
          placeholder='Digite o conteúdo do capítulo'
          multiline={true}
          style={styles.inputContent} />

        <Button title='Salvar'
          onPress={async () => {
            if (title.length <= 0) {
              return Alert.alert('O campo de título deve ser preenchido!');
            }

            const res = await Api.post('chapters/save', {
              title: title,
              content: content,
              tale: tale,
            });

            if (res.status === 201) {
              Alert.alert(res.text);

              setTitle('');
              setContent('');
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
  inputContent: {
    height: 300,
    margin: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#cecece',
    fontSize: 17,
  },
  label: {
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 10,
  }
});