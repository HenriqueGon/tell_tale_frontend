import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Details = (routes) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const tale = routes.route.params;
  
  useEffect(() => {
    if (isFocused) {
      console.log(isFocused);
    }
  }, [isFocused])

  function header(tale) {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://picsum.photos/id/10/200' }}
          style={styles.image}>

          <Text style={styles.title}>
            {tale.name}
          </Text>

          {/* <Text style={styles.info}> Autor: sit amet, consectetur </Text> */}

          {/* <Text style={styles.info}> 
          Último lançamento: adipiscing elit 
        </Text> */}
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

          <TouchableOpacity onPress={() => navigation.navigate('FormChapter')}
            style={{ paddingTop: 10 }}>
            <Feather name='plus'
              size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <FlatList data={tale.chapters}
      ListHeaderComponent={header(tale)}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Chapter', item)}>
          <Text style={styles.chapterTitle}> 
            Capítulo {item.key}: {item.name} 
          </Text>
        </TouchableOpacity>
      )}
      style={{ backgroundColor: '#fff' }} />
  );
}

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
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
  },
  info: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
  },
  descriptionTitle: {
    width: '86%',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
  },
  chapters: {
    width: '100%',
    flexDirection: 'row',
    marginRight: 10,
  },
  chapterTitle: {
    fontSize: 17,
    marginLeft: 10,
    paddingBottom: 10,
  }
});

export default Details;
