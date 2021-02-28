import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {PostContext} from '../../../context/postContext';

const PostFooter = () => {
  const {
    state: {
      post: {likes},
    },
  } = useContext(PostContext);

  return (
    <View>
      <Text>Likes {likes}</Text>
      <Text>LIKE - COMMENT</Text>
    </View>
  );
};

export default PostFooter;
