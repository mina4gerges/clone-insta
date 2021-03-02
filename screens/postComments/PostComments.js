import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostCommentsBody from './postComment/PostCommentsBody';
import PostCommentsFooter from './postComment/PostCommentsFooter';

// Comments screen divided to 2 components
// Body and Footer
const PostComments = () => {
  return (
    <View style={styles.postCommentContainer}>
      <PostCommentsBody />
      <PostCommentsFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default PostComments;
