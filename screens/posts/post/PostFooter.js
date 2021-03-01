import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {PostContext} from '../../../context/postContext';
import {onCommentPress, onLikePress} from '../../../actions/postActions';
import {PostsContext} from '../../../context/postsContext';

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

  const isPostAlreadyLiked = likedPostIds.includes(postId);

  return (
    <View style={styles.postFooterContainer}>
      <TouchableOpacity
        style={[styles.button, styles.buttonPadding]}
        onPress={onLikePress(
          dispatchPost,
          dispatchPosts,
          postId,
          likedPostIds,
        )}>
        <Icon
          size={25}
          style={styles.likesButton}
          name={`${isPostAlreadyLiked ? 'heart' : 'hearto'}`}
        />
        <Text style={styles.likesButton}>{` ${likes}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonPadding]}
        onPress={onCommentPress(navigation, postId)}>
        <Icon size={25} style={styles.commentsButton} name="plussquare" />
        <Text style={styles.commentsButton}>{` ${comments.length}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postFooterContainer: {
    flexDirection: 'row',
  },
  buttonPadding: {
    paddingHorizontal: 5,
  },
  button: {
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
