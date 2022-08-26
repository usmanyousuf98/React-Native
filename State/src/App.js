import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import showScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/CreateScreen'

const Stack = createNativeStackNavigator();

    const App = ({navigation }) => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name="Index" component={IndexScreen} options={{title: 'Blogs'}}/>
        <Stack.Screen name="Show" component={showScreen} options={{title: 'Show Screen',
         headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Create_Screen')}
              title="Info"
            />
          )}}/>
        <Stack.Screen name="Create_Screen" component={CreateScreen} options={{title: 'CreateScreen'}}/>
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
    