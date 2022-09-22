import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';
//import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  const {state, signin, tryLocalSignin} = useContext(Context);
  const navigation = useNavigation();
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Spacer>
          <Text style={styles.link}>Dont have an account? Sign up instead</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

// SigninScreen.navigationOptions = {
//   header: () => false,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
