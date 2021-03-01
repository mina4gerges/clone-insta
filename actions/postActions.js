import {
  INCREMENT_LIKES,
  DECREMENT_LIKES,
  REMOVE_POST_ID,
  ADD_POST_ID,
} from '../constant/actionsType';

export const onLikePress = (
  dispatchPost,
  dispatchPosts,
  postId,
  likedPostIds,
) => () => {
  // Check if the post is already liked by the logged in user
  const isPostAlreadyLiked = likedPostIds.includes(postId);

  // Action to increment and decrement likes based if the user already liked the
  // post or no
  dispatchPost({type: isPostAlreadyLiked ? DECREMENT_LIKES : INCREMENT_LIKES});

  // Add or remove postId to likedPostIds (ids already liked by the logged in
  // user)
  dispatchPosts({
    type: isPostAlreadyLiked ? REMOVE_POST_ID : ADD_POST_ID,
    payload: {postId},
  });
};

export const onCommentPress = (navigation, postId) => () => {
  navigation.navigate('PostComment', {postId});
};
