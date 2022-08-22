import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDeatail from './ResultDeatail'
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return ( 
            <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
              <ResultDeatail result={item} />
            </TouchableOpacity>
          
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft:15
  }
});

export default ResultsList;
