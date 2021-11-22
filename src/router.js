import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './screens/Home';
import Details from './screens/Details';
import Login from './screens/Login';

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
              <TouchableOpacity onPress={() => {}}>
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
            // headerRight: () => (
            //   <TouchableOpacity>
            //     <Feather name=''
            //       size={24} />
            //   </TouchableOpacity>
            // )
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;