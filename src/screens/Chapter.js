import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function Chapter(routes) {
  const chapter = routes.route.params;
  
  return(
    <View style={{ height: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        <Text style={styles.title}>
          {chapter.title}
        </Text>

        <Text style={styles.content}>
          {chapter.content}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 10,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
    fontSize: 17
  }
});