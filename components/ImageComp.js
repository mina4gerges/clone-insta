import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 1000; //1000 is actual image width

const ImageCom = ({source, alt, width = win.width, height = 1000 * ratio}) => {
  return (
    <View styles={styles.imgContainer}>
      <Image source={source} alt={alt} style={{width, height}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'red',
  },
});

export default React.memo(ImageCom);
