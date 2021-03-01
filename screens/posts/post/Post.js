import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import {PostContext} from '../../../context/postContext';
import {UPDATE_POST} from '../../../constant/actionsType';
import LoadingStatus from '../../../components/LoadingStatus';

const Post = ({post}) => {
  const {
    dispatch,
    state: {
      // Set an id by default equal to -1 in behave to add spinner indicator
      post: {id = -1},
    },
  } = useContext(PostContext);

  useEffect(() => {
    dispatch({type: UPDATE_POST, payload: {post}});
  }, [post, dispatch]);

  return (
    <View style={styles.postContainer}>
      {id === -1 ? (
        <LoadingStatus />
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
    margin: 4,
    height: 480,
  },
});

export default Post;
