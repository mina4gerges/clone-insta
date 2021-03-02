import React, {useState} from 'react';
import {View, Dimensions, Image} from 'react-native';
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
  const [isLoading, setIsLoading] = useState(true);

  const isSourceFromUri =
    typeof source === 'string' && source.startsWith('http');

  return (
    <View>
      {isLoading && (
        <View style={{width, height}}>
          <LoadingSpinner />
        </View>
      )}
      <Image
        alt={alt}
        onLoadEnd={() => setIsLoading(false)}
        style={{
          width: isLoading ? 0 : width,
          height: isLoading ? 0 : height,
          borderRadius: isLoading ? 0 : borderRadius,
        }}
        source={isSourceFromUri ? {uri: source} : source}
      />
    </View>
  );
};

export default React.memo(ImageCom);
