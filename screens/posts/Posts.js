import React, {useEffect, useContext, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
    state: {loggedInUser = {}, posts = []},
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
    <View style={styles.body}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        style={styles.scrollView}
        renderItem={({item}) => (
          <PostProvider key={item.id}>
            <Post post={item} />
          </PostProvider>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Posts;
