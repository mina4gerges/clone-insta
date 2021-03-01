import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ImageComp from '../../../components/ImageComp';
import {DEFAULT_IMAGE, DEFAULT_IMAGE_ALT} from '../../../constant/default';
import {PostContext} from '../../../context/postContext';

const PostBody = () => {
  const {
    state: {
      post: {images},
    },
  } = useContext(PostContext);

  return (
    <View style={styles.postBodyContainer}>
      {images.length === 1 ? (
        // If one image display it as simple ImageComp (not in a FlatList)
        <ImageComp
          source={images[0].image ?? DEFAULT_IMAGE}
          alt={DEFAULT_IMAGE_ALT}
        />
      ) : (
        // If multiple images display it in a FlatList
        <FlatList
          data={images}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ImageComp
              source={item.image ?? DEFAULT_IMAGE}
              alt={DEFAULT_IMAGE_ALT}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postBodyContainer: {
    marginVertical: 10,
  },
});

export default PostBody;
