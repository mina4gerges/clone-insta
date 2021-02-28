import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import {PostContext} from '../../../context/postContext';
import {UPDATE_POST} from '../../../constant/actionsType';

const Post = ({post}) => {
  const {dispatch} = useContext(PostContext);

  useEffect(() => {
    dispatch({type: UPDATE_POST, payload: {post}});
  }, [post, dispatch]);

  return (
    <View style={styles.postContainer}>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    margin: 4,
  },
});

export default Post;
