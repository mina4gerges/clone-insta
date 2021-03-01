import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {PostsContext} from '../../../context/postsContext';
import PostComment from './PostComment';

const PostCommentsBody = () => {
  const {
    params: {postId},
  } = useRoute();

  const {
    state: {posts},
  } = useContext(PostsContext);

  let flatList;

  const postFound = posts.find((post) => post.id === postId);
  const comments = postFound.comments;

  return (
    <View style={styles.postCommentContainer}>
      <FlatList
        data={comments}
        ref={(ref) => (flatList = ref)}
        keyExtractor={(item) => item.id}
        onContentSizeChange={() => flatList?.scrollToEnd({animated: true})}
        renderItem={({item}) => (
          <PostComment
            comment={item.comment}
            dateTime={item.dateTime}
            fullName={item.fullName}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flex: 12,
  },
});

export default PostCommentsBody;
