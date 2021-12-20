import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function FormChapter() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>
        Título:
      </Text>

      <TextInput value={title}
        onChangeText={setTitle}
        style={styles.input} />

      <Text style={styles.label}>
        Conteúdo:
      </Text>

      <TextInput value={content}
        onChangeText={setContent}
        multiline={true}
        style={styles.inputContent} />
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
  inputContent: {
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