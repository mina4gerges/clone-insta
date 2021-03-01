import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {PostContext} from '../../../context/postContext';
import {onCommentPress, onLikePress} from '../../../actions/postActions';
import {PostsContext} from '../../../context/postsContext';

const PostFooter = () => {
  const {
    dispatch: dispatchPost,
    state: {
      post: {id: postId, likes = 0, comments = []},
    },
  } = useContext(PostContext);

  const {
    dispatch: dispatchPosts,
    state: {
      loggedInUser: {likedPostIds = []},
    },
  } = useContext(PostsContext);

  return (
    <View style={styles.postFooterContainer}>
      <Button
        style={styles.button}
        title={`Like ${likes}`}
        onPress={onLikePress(dispatchPost, dispatchPosts, postId, likedPostIds)}
      />
      <Button
        style={styles.button}
        onPress={onCommentPress(dispatchPost)}
        title={`Comment ${comments.length}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postFooterContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'red',
  },
  likedPost: {
    color: 'green',
  },
  noLikedPost: {
    color: 'red',
  },
});

export default PostFooter;
