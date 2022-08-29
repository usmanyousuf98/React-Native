import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource,name }) => {
  return (
    <View>
      <Image
      style={styles.imageSize}
      source={imageSource} />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
    imageSize:{
        width:300,
        height:400,
    }
});

export default ImageDetail;
