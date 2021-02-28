import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import {DEFAULT_IMAGE, DEFAULT_IMAGE_ALT} from '../constant/default';

const ImageCom = ({source = DEFAULT_IMAGE, alt = DEFAULT_IMAGE_ALT}) => {
  return (
    <View styles={styles.imgContainer}>
      <Image source={source} alt={alt} style={styles.image} />
    </View>
  );
};

const win = Dimensions.get('window');
const ratio = win.width / 1000; //1000 is actual image width

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'red',
  },
  image: {
    width: win.width,
    height: 1000 * ratio, //1000 is actual height of image
  },
});

export default ImageCom;
