import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, FlatList, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import News from '../components/News';

function fetchData() {
  return [
    {
      key: '1',
      name: 'Teste de nome bem grande para ver como fica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ex a mauris cursus porta ut et leo. Maecenas interdum odio sit amet ligula finibus, a pharetra ex gravida. Aliquam sodales euismod velit quis vehicula. Etiam suscipit rutrum rutrum. Phasellus eu magna at elit maximus rhoncus. Quisque vehicula magna euismod velit pharetra sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ultricies ipsum non mollis finibus. Nunc egestas cursus sapien vel dictum.Vestibulum tincidunt purus eu odio interdum condimentum.Duis risus ex, pretium in ultricies ut, tempor et tortor.Donec dapibus est at ex bibendum, ut laoreet enim facilisis.Aliquam justo quam, luctus quis quam id, elementum elementum metus.Vivamus sed fermentum justo.Nam ornare dapibus interdum.Suspendisse augue purus, tempor in neque sit amet, tincidunt cursus libero.Sed feugiat eros in ex pulvinar, eu ullamcorper lacus consequat.In sed dui at enim interdum ultrices.Proin ut sem lectus.Praesent molestie mattis risus sed convallis.Suspendisse semper convallis nisi vel pharetra.Nullam dapibus nulla eget nibh laoreet ultricies.Duis dignissim semper massa, bibendum semper sem dapibus nec.Vestibulum et quam quis nisl consequat tincidunt eu a purus.Nam vulputate, risus sit amet tincidunt vehicula.',
      image: 'https://picsum.photos/id/1/200',
      chapters: [
        {
          key: 1,
          name: 'teste',
          content: '',
        },
        {
          key: 2,
          name: 'teste1',
          content: '',
        },

      ]
    },
    {
      key: '2',
      name: '2',
      description: 'Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 ',
      image: 'https://picsum.photos/id/10/200',
    },
    {
      key: '3',
      name: '2',
      description: 'Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 Item text 2 ',
      image: 'https://picsum.photos/id/10/200',
    },
  ]
}

export default function Home() {
  return (
   <View style={{ height: '100%' }}>
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}>
      
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name='search' size={24} />
          <TextInput placeholder='O que está procurando?'
            style={styles.input} />
        </View>
      </View>

      {/* <View style={styles.contentNew}>
        <Text style={styles.titleSection}> Novos </Text>
      </View> */}

      <FlatList data={fetchData()}
        renderItem={({ item }) => (
          <News tale={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false} />
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    height: 37,
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 16,
    width: '90%',
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  titleSection: {
    paddingHorizontal: 15,
    fontSize: 16,
  }
});