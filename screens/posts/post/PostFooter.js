import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PostContext} from '../../../context/postContext';
import {onCommentPress, onLikePress} from '../../../actions/postActions';
import {PostsContext} from '../../../context/postsContext';
import IconButton from '../../../components/IconWithText';

const PostFooter = () => {
  const navigation = useNavigation();

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

  // Test if the post is liked by the logged in user
  const isPostAlreadyLiked = likedPostIds.includes(postId);

  // Display like and comment icons
  return (
    <View style={styles.postFooterContainer}>
      <IconButton
        text={` ${likes}`}
        iconStyle={styles.likesButton}
        textStyle={styles.likesButton}
        iconName={`${isPostAlreadyLiked ? 'heart' : 'heart-outline'}`}
        onPress={onLikePress(dispatchPost, dispatchPosts, postId, likedPostIds)}
      />

      <IconButton
        iconName="comment-text-outline"
        text={` ${comments.length}`}
        iconStyle={styles.commentsButton}
        textStyle={styles.commentsButton}
        onPress={onCommentPress(navigation, postId)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postFooterContainer: {
    flexDirection: 'row',
  },

  likesButton: {
    fontWeight: 'bold',
    color: 'red',
  },
  commentsButton: {
    fontWeight: 'bold',
    color: '#8B008B',
  },
});

export default PostFooter;
