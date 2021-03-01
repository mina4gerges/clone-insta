import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PostComment = () => {
  return (
    <View style={styles.postCommentContainer}>
      <Text>Hello from post comment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PostComment;
