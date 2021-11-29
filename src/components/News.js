import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function News(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', props.tale)}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}> 
          {props.tale.name} 
        </Text>
      </View>

      <Image source={{uri: props.tale.image}}
        style={styles.image} />

      <Text style={styles.description}>
        {props.tale.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    height: 300,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  image: {
    width: 170,
    height: 110, 
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    width: '100%'
  },
  title: {
    fontSize: 16,
    textAlign: 'justify'
  },
  description: {
    height: '100%',
    width: '100%',
    textAlign: 'justify'
  }
});