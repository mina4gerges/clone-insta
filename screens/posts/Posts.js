import React, {useEffect, useContext, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {PostsContext} from '../../context/postsContext';
import Post from './post/Post';
import {PostProvider} from '../../context/postContext';
import {fetchData} from '../../actions/postsActions';
import ImageComp from '../../components/ImageComp';
import {
  DEFAULT_USER_IMAGE,
  DEFAULT_USER_IMAGE_ALT,
} from '../../constant/default';

const Posts = () => {
  const navigation = useNavigation();

  const {
    dispatch,
    state: {loggedInUser, posts = []},
  } = useContext(PostsContext);

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ImageComp
          width={40}
          height={40}
          borderRadius={50}
          alt={DEFAULT_USER_IMAGE_ALT}
          source={loggedInUser.image ?? DEFAULT_USER_IMAGE}
        />
      ),
    });
  }, [loggedInUser.image, navigation]);

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
