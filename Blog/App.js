import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import showScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

    const App = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        {/* <Stack.Screen name="Login_Screen" component={LoginScreen} options={{title: 'Login Screen'}}/> */}
        <Stack.Screen name="Index" component={IndexScreen} options={{title: 'Blogs'}}/>
        <Stack.Screen name="Show" component={showScreen} options={{title: 'Show Screen'}}/>
        <Stack.Screen name="Create_Screen" component={CreateScreen} options={{title: 'Create Screen'}}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{title: 'Edit Screen'}}/>
      </Stack.Navigator>

    </NavigationContainer>
    );
    }

    //export default App;

    export default () => {
      return (
        <Provider>
          <App />
        </Provider>
      );
    };
    