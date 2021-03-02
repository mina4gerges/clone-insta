import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Display comment detail
// fullName of the user that added the comment
// and comment text
// and dateTime of the comment
const PostComment = ({comment, dateTime, fullName}) => {
  return (
    <View style={styles.postCommentContainer}>
      <Text style={styles.fullNameText}>{fullName}</Text>
      <Text style={styles.commentText}>{comment}</Text>
      <Text style={styles.dateTimeText}>{dateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  fullNameText: {
    fontSize: 12,
    color: 'grey',
    textTransform: 'capitalize',
  },
  commentText: {
    fontSize: 15,
    paddingVertical: 5,
  },
  dateTimeText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'right',
  },
});

export default React.memo(PostComment);
