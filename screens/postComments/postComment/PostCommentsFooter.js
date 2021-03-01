import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {PostsContext} from '../../../context/postsContext';
import {useRoute} from '@react-navigation/native';
import {addComment} from '../../../actions/postsActions';

const PostCommentsFooter = () => {
  const [value, setValue] = useState('');

  const {
    state: {loggedInUser},
    dispatch,
  } = useContext(PostsContext);

  const {
    params: {postId},
  } = useRoute();

  const onChangeText = (text) => {
    setValue(text);
  };

  const onSendPress = () => {
    addComment(dispatch, postId, value, loggedInUser);
    setValue('');
  };

  return (
    <View style={styles.postCommentContainer}>
      <TextInput
        value={value}
        autoFocus={true}
        placeholder="Comment"
        style={styles.textInput}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onSendPress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 20,
  },
  textInput: {
    flex: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default PostCommentsFooter;
