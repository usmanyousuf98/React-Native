// In App.js in a new project

import * as React from 'react';
import SearchScreen from './src/screens/SearchScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultShow from './src/screens/ResultShow'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Results" component={ResultShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;