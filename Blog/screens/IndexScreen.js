import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
//import BlogContext from '../context/BlogContext';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const IndexScreen = ({}) => {
  const { state, addBlogPost,deleteBlogPost } = useContext(Context);
  const navigation = useNavigation()
 
 
  useLayoutEffect (() => {
    navigation.setOptions({title: 'Create Blog', headerRight: () => (
      <Button title='Create Blog' onPress={()=> navigation.navigate('Create_Screen')}/>

    )})
  }, [navigation])
 
  return (
    <View>
      <Text>Index Screen</Text>
      {/* <Button title="Add Post" onPress={addBlogPost}/> */}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show',{id : item.id})}>
              
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} -  {item.id}</Text>
              <Text style={styles.title}>{item.content}</Text>
              <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
              <Icon style={styles.icon} name="trash-o" />
              </TouchableOpacity>
              
            </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
