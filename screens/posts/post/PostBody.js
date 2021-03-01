import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ImageComp from '../../../components/ImageComp';
import {DEFAULT_IMAGE, DEFAULT_IMAGE_ALT} from '../../../constant/default';
import {PostContext} from '../../../context/postContext';

const PostBody = () => {
  const {
    state: {
      post: {images, comments},
    },
  } = useContext(PostContext);

  return (
    <View style={styles.postBodyContainer}>
      {images.length === 1 ? (
        // If one image display it as simple ImageComp (not in a FlatList)
        <ImageComp
          source={images[0].image ?? DEFAULT_IMAGE}
          alt={DEFAULT_IMAGE_ALT}
        />
      ) : (
        // If multiple images display it in a FlatList
        <FlatList
          data={images}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ImageComp
              source={item.image ?? DEFAULT_IMAGE}
              alt={DEFAULT_IMAGE_ALT}
            />
          )}
        />
      )}
      {/*Comment section*/}
      {comments.length !== 0 && (
        <View style={styles.commentsContainer}>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={styles.commentContainer}>
                <Text style={styles.commentFullName}>{item.fullName}: </Text>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postBodyContainer: {
    flex: 1,
    marginVertical: 10,
  },
  commentsContainer: {
    padding: 5,
    backgroundColor: '#eee',
  },
  commentContainer: {
    flexDirection: 'row',
    padding: 2,
    fontWeight: 'bold',
  },
  commentFullName: {
    fontSize: 12,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 12,
  },
});

export default PostBody;
