import React from 'react';
import { Button, View,Text } from 'react-native';

function ColorCounter({Color, onIncrease, onDecrease}) {
    return (
        <View>
            <Text>{Color} </Text>

                <Button 
                onPress={()=> onIncrease()} 
                title={`Increase ${Color}`}/>
                
                <Button 
                onPress={()=> onDecrease()}
                title={`Decrease ${Color}`}/>

                
           
        </View>
    );
}

export default ColorCounter;    