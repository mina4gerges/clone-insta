import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostCommentsBody from './postComment/PostCommentsBody';
import PostCommentsFooter from './postComment/PostCommentsFooter';

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
