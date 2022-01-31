import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './screens/Home';
import Details from './screens/Details';
import Chapter from './screens/Chapter';
import Login from './screens/Login';
import FormTale from './screens/FormTale';
import FormChapter from './screens/FormChapter';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' 
          component={Home} 
          options={({ navigation }) => ({
            title: '',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('FormTale')}>
                <Feather name='plus'
                  size={24} />
              </TouchableOpacity>
            ),
          })} />

        {/* <Stack.Screen name='Login'
          component={Login}
          options={{
            title: '',
            headerRight: () => (
              <TouchableOpacity>
                <Feather name=''
                  size={24} />
              </TouchableOpacity>
            )
          }} /> */}

        <Stack.Screen name='Details'
          component={Details}
          options={{
            title: 'Detalhes',
            headerRight: () => (
              <TouchableOpacity onPress={() => {}}>
                <Feather name='edit-2'
                  style={{ color: '#ffff00' }}
                  size={24} />
              </TouchableOpacity>
            )
          }} />

        <Stack.Screen name='Chapter'
          component={Chapter}
          options={{
            title: '',
            // headerRight: () => (
            //   <TouchableOpacity>
            //     <Feather name=''
            //       size={24} />
            //   </TouchableOpacity>
            // )
          }} />

        <Stack.Screen name='FormTale'
          component={FormTale}
          options={{
            title: 'Cadastro de Contos',
            headerRight: () => (
              <TouchableOpacity>
                <Feather name='check'
                  size={24}
                  style={{ color: '#2bff00' }} />
              </TouchableOpacity>
            )
          }} />

        <Stack.Screen name='FormChapter'
          component={FormChapter}
          options={({ navigation }) => ({
            title: 'Cadastro de Capítulos',
            headerRight: () => (
              <TouchableOpacity onPress={() => {}}>
                <Feather name='check'
                  size={24} 
                  style={{ color: '#2bff00' }} />
              </TouchableOpacity>
            ),
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;