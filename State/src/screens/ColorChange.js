import React,{useState} from 'react';
import { TextInput, View,Text , StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';


function ColorChange(props) {

    const [red, setRed] =useState(0);
    const [blue, setBlue] =useState(0); 
    const [green, setGreen] =useState(0);

    const setColor = (color, change) => {
      //console.log(color, change);
        switch (color) {
          case 'red':
            parseInt(red) + parseInt(change) > 255 || parseInt(red) + parseInt(change) < 0 ? null : setRed(parseInt(red) + parseInt(change));
            console.log(red, change);
            return;
          case 'green':
            parseInt(green) + parseInt(change) > 255 || parseInt(green) + parseInt(change) < 0
              ? null
              : setGreen(parseInt(green) + parseInt(change));
            return;
          case 'blue':
            parseInt(blue) + parseInt(change) > 255 || parseInt(blue) + parseInt(change) < 0
              ? null
              : setBlue(parseInt(blue) + parseInt(change));
            return;
          default:
            return;
        }
      };
    
    const [increament, setIncreament] = useState(0);
    return (

        <View>
           <Text>Enter the value for color change:</Text>
           <TextInput
           style={styles.input}
           
           keyboardType='numeric'
           value = {increament}
           onChangeText={ newValue=>setIncreament(newValue)}
           />
           <Text>{increament}</Text>
            <ColorCounter
                onIncrease={() => setColor('red', increament)}
                onDecrease={() => setColor('red', -1 * increament)}
                Color="Red"
                />
                <ColorCounter
                onIncrease={() => setColor('blue', increament)}
                onDecrease={() => setColor('blue', -1 * increament)}
                Color="Blue"
                />
                <ColorCounter
                onIncrease={() => setColor('green', increament)}
                onDecrease={() => setColor('green', -1 * increament)}
                Color="Green"
                />

            <View  style={{ height: 100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}/>
        </View>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ColorChange;