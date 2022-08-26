// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorChange from './src/screens/ColorChange';
import ColorChangeReducer from './src/screens/ColorChangeReducer'
import passwordScreen from './src/screens/passwordScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Color Change" component={ColorChange}/>
        <Stack.Screen name="Color Change reducer" component={ColorChangeReducer}/>
        <Stack.Screen name="Password" component={passwordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;