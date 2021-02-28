import React, {useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PostsContext} from '../../context/postsContext';
import {FETCH_DATA} from '../../constant/actionsType';
import Post from './post/Post';
import {PostProvider} from '../../context/postContext';

const Posts = () => {
  const {
    dispatch,
    state: {posts},
  } = useContext(PostsContext);

  useEffect(() => {
    dispatch({type: FETCH_DATA});
  }, [dispatch]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.body}>
        {posts.map((post) => (
          <PostProvider key={post.id}>
            <Post post={post} />
          </PostProvider>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default Posts;
