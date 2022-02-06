import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, FlatList, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import News from '../components/News';
import Api from '../services/Api';

export default function Home() {
  const [tales, setTales] = useState([]);
  const [search, setSearch] = useState('');

  const isFocused = useIsFocused();

  useEffect(async () => {
    if (isFocused) {
      const data = await Api.get('tales');

      setTales(data);
    }
  }, [isFocused])

  return (
   <View style={{ height: '100%' }}>
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}>
      
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name='search' size={24} />
          <TextInput value={search}
            onChangeText={setSearch}
            placeholder='O que está procurando?'
            style={styles.input}
            onSubmitEditing={async () => {
              const data = await Api.get(`tales/${search}`);

              setTales(data);
            }} />
        </View>
      </View>

      <View style={styles.contentNew}>
        <View style={styles.ball} />
        <Text style={styles.titleSection}> Novos </Text>
      </View>

      <FlatList data={tales}
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
    alignItems: 'center'
  },
  titleSection: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  ball: {
    height: 6,
    width: 6,
    borderRadius: 10,
    backgroundColor: '#f00',
    marginLeft: 16,
  }
});