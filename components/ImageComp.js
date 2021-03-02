import React, {useState} from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import LoadingSpinner from './LoadingSpinner';

const win = Dimensions.get('window');
//1000 is actual image width
const ratio = win.width / 1000;

// Image component that fetch data from network or static path and display spinner while fetching the image
const ImageCom = ({
  source,
  alt,
  width = win.width,
  borderRadius = 0,
  height = 1000 * ratio,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const isSourceFromUri =
    typeof source === 'string' && source.startsWith('http');

  return (
    <View styles={styles.imgContainer}>
      <Image
        alt={alt}
        onLoadEnd={() => setIsLoading(true)}
        onLoadStart={() => setIsLoading(true)}
        style={{
          width: isLoading ? 0 : width,
          height: isLoading ? 0 : height,
          borderRadius: isLoading ? 0 : borderRadius,
        }}
        source={isSourceFromUri ? {uri: source} : source}
      />
      {isLoading && (
        <View style={{width, height}}>
          <LoadingSpinner />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'red',
  },
});

export default React.memo(ImageCom);
