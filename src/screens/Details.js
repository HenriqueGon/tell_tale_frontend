import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, ListItem } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

function header(tale) {
  return (
    <View style={{ height: '100%' }}>
      <ImageBackground source={{uri: 'https://picsum.photos/id/10/200'}}
        style={styles.image}>

        <Text style={styles.title}> {tale.name} </Text>
        {/* <Text style={styles.info}> Autor: sit amet, consectetur </Text> */}
        <Text style={styles.info}> Último lançamento: adipiscing elit  </Text>
      </ImageBackground>

      <View>
        <Text style={styles.descriptionTitle}>
          Descrição
        </Text>

        <Text style={styles.description}>
          {tale.description}
        </Text>
      </View>

      <View style={styles.chapters}>
        <Text style={styles.descriptionTitle}>
          Capítulos
        </Text>

        <TouchableOpacity onPress={() => {}}
          style={{ paddingTop: 10 }}>
          <Feather name='plus'
            size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Details(routes) {
  const tale = routes.route.params;

  return (
    <FlatList data={tale.chapters}
    renderItem={({ item }) => (
      // <Text style={styles.chapters}>
      //   {item.name}
      // </Text>
      <ListItem key={item.key}
        name={item.name} />
    )} 
    ListHeaderComponent={header(tale)} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'justify'
  },
  info: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5
  },
  descriptionTitle: {
    width: '80%',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
  chapters: {
    width: '100%',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
});