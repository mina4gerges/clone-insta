import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 1000; //1000 is actual image width

const ImageCom = ({
  source,
  alt,
  width = win.width,
  borderRadius = 0,
  height = 1000 * ratio,
}) => {
  const isSourceFromUri =
    typeof source === 'string' && source.startsWith('http');

  return (
    <View styles={styles.imgContainer}>
      <Image
        alt={alt}
        style={{width, height, borderRadius}}
        source={isSourceFromUri ? {uri: source} : source}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'red',
  },
});

export default React.memo(ImageCom);
