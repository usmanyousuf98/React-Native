import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
const pass = "Admin123";

const onPress = () => {

    if (password.length !== 0) 
    {
        console.log(pass);
        if(password == pass)
        Alert.alert(
            "Success",
            // password,
            // [
            //     {
            //         text: "Cancel",
            //         onPress: () => console.log("Cancel Pressed"),
            //     },
            //     { 
            //         text: "OK", 
            //         onPress: () => console.log("OK Pressed"),
            //     },
            // ],
        )
        //return;

        else{
            Alert.alert(
                'Please Enter Correct password'
             )
        }
    }

}

  return (

    
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        selectTextOnFocus={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}

      <Button
      title='submit'
     onPress={() => onPress()}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
