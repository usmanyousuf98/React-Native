import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import yelp from '../api/yelp';
import ResultsDetail from '../components/ResultDeatail';

function ResultShow({route, navigation}) {
    const { id } = route.params;
    const [result, setResult] =  useState(null)
    //const [result, setResult] = useState(null);
   // const id = navigation.getParam('id');
    
    const getResult = async id => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };
    useEffect(() => {
      getResult(id);
    }, []);
    console.log(result);

    if (!result) {
      return null;
    }
  
    return (
      <View style={styles.box}>
        <Text style={styles.name}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
}
 const styles = StyleSheet.create({
    box:{
        flex:1,
        
      },
  image: {
    width:300,
    height: 200,
    borderRadius: 25,
    flex: 1,
    padding: 10,
    margin:15
   // width: 250,
    //height: 120,
   // borderRadius: 4
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  }
 })
export default ResultShow;