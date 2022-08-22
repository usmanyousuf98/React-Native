import React , {useState}from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';



function ColorScreen(props) {
    const [colorC, colorCC] = useState([]);
    return (

        <View >
        <Button 
        title='Add Color' 
        onPress={()=> 
            colorCC([...colorC, randomRGB()])}
        >

        </Button>

        <FlatList
         keyExtractor={item => item}
        data={colorC}
        renderItem={({item}) =>
        {
            return(
                <View style={{height:100, width:100, backgroundColor: item }}/>
            );
        }
        
        }
        />
        
        </View>
    );
}

const randomRGB =()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue} )`;
};

// const randomRGB = () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
  
//     return `rgb(${red}, ${green}, ${blue})`;
//   };
 const styles = StyleSheet.create({
    
 })
export default ColorScreen;