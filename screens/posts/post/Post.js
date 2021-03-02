import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import {PostContext} from '../../../context/postContext';
import {UPDATE_POST} from '../../../constant/actionsType';
import LoadingSpinner from '../../../components/LoadingSpinner';

const Post = ({post}) => {
  const {
    dispatch,
    state: {
      // Set an id by default equal to -1 in behave to add spinner indicator
      post: {id = -1},
    },
  } = useContext(PostContext);

  // Set each post into the context
  useEffect(() => {
    dispatch({type: UPDATE_POST, payload: {post}});
  }, [post, dispatch]);

  // Post screen divided to 3 components
  // Header, Body and Footer
  return (
    <View style={styles.postContainer}>
      {id === -1 ? (
        <LoadingSpinner />
      ) : (
        <>
          <PostHeader />
          <PostBody />
          <PostFooter />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 5,
  },
});

export default Post;
