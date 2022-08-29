// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import test from './src/test';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="test1">
        <Stack.Screen name="test1" component={test}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;