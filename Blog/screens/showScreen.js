import React, { useContext,useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Button} from 'react-native';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome'

const ShowScreen = ({ route,navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === route.params?.id
  );
  useLayoutEffect (() => {
    navigation.setOptions({title: 'Create Blog', headerRight: () => (
      <Button title='Edit Blog'onPress={() =>
        navigation.navigate('Edit', { id: route.params?.id })
      }/>

    )})
  }, [navigation])

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};



const styles = StyleSheet.create({});

export default ShowScreen;
