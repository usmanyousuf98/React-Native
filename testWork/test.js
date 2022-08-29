import React, { useState } from 'react';
import { View, Button,Text, StyleSheet,Image } from 'react-native';
import ImgeComp from './ImgeComp';
import BScreen from './BScreen';


function test () {
    const [count, nextCount] = useState(2)
    console.log(count);
    const img = [
        {
          id: "0",
          image: require("../assets/img1.jpg"),
          name: 'Lucifer 1'
        },
        {
          id: "1",
          image: require("../assets/img2.jpg"),
          name: 'Lucifer 2'
        },
        {
          id: "2",
          image: require("../assets/img3.jpg"),
          name: 'Lucifer 3'
        },
        
      ];

      
    const onPressNext =()=> {
         nextCount(count == img.length - 1  ? 
            0 : 
            count + 1
        )
      }

    const onPressPrevious=()=>{
        nextCount(count == img.length - img.length  ? 
            0 : 
            count - 1
        )
    }
   // const img =['../assets/img1.jpg','../assets/img2.jpg','../assets/img3.jpg']
    return (
        <View>
            <View>
                <ImgeComp
                    imageSource={img[count].image} 
                    name={img[count].name}
                />
               <Text style={styles.textSize}>{img[count].name}</Text>
            </View>
            <BScreen
            onPressNext={onPressNext}
            onPressPrevious={onPressPrevious}
            />

            <Text style={ styles.textSize}>{count}</Text>
        </View>
    );
    }
    const styles = StyleSheet.create({
    ImageSize:{
        width :300,
        height: 300,
    },
    textSize:{
        fontSize :30,
    },
   
    }
)
export default test;