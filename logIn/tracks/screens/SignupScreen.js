import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import {useFocusEffect} from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //       clearErrorMessage();
  //     });
  //     return () => unsubscribe();
  //   }, []),
  // );

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     clearErrorMessage();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

// SignupScreen.navigationOptions = () => {
//   return {
//     header: () => false,
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;
