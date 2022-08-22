import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';


function CounterScreen(props) {
    const [count, nextCount] = useState(0);
    return (
       
        <View>
            <Button 
                title='+1'
                onPress={() => 
                nextCount(count+1)}
            />

            <Button 
            title='-1'
            onPress={() => 
            nextCount(count-1)}
            />
            <Text>Current Counter: {count}</Text>
        </View>
    );
}

export default CounterScreen;