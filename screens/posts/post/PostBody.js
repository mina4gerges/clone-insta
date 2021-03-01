import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ImageComp from '../../../components/ImageComp';
import {DEFAULT_IMAGE, DEFAULT_IMAGE_ALT} from '../../../constant/default';
import {PostContext} from '../../../context/postContext';

const PostBody = () => {
  const {
    state: {
      post: {images},
    },
  } = useContext(PostContext);

  // If one image display it as simple ImageComp (not in a FlatList)
  if (images.length === 1) {
    return (
      <ImageComp
        source={images[0].image ?? DEFAULT_IMAGE}
        alt={DEFAULT_IMAGE_ALT}
      />
    );
  }

  // If multiple images display it in a FlatList
  return (
    <FlatList
      data={images}
      horizontal={true}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <ImageComp
          source={item.image ?? DEFAULT_IMAGE}
          alt={DEFAULT_IMAGE_ALT}
        />
      )}
    />
  );
};

export default PostBody;
