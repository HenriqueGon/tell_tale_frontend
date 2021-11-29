import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function header(tale) {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ height: '100%', minHeight: windowHeight, backgroundColor: '#fff' }}>
      <ImageBackground source={{uri: 'https://picsum.photos/id/10/200'}}
        style={styles.image}>

        <Text style={styles.title}>
          {tale.name} 
        </Text>
        
        {/* <Text style={styles.info}> Autor: sit amet, consectetur </Text> */}
        
        <Text style={styles.info}> 
          Último lançamento: adipiscing elit 
        </Text>
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

        {/* <TouchableOpacity onPress={() => {}}
          style={{ paddingTop: 10 }}>
          <Feather name='plus'
            size={24} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default function Details(routes) {
  const navigation = useNavigation();
  const tale = routes.route.params;
  
  return (
    <FlatList data={tale.chapters}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Chapter', item)}>
          <Text> Capítulo {item.key}: {item.name} </Text>
        </TouchableOpacity>
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
  teste: {
    color: '#fff',
    width: 50,
    height: 10,
  }
});