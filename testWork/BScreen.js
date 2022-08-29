import React from 'react';
import { Button, View } from 'react-native';

function BScreen({onPressPrevious, onPressNext}) {
    return (
        <View>
        <Button
            title='Prevoius'
            onPress={onPressPrevious}
        />
    <Button 
    title='Next'
    onPress={onPressNext}
    />
        </View>
    );
}

export default BScreen;