import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const PostCommentsFooter = () => {
  const [value, setValue] = useState('');
  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.postCommentContainer}>
      <TextInput
        value={value}
        placeholder="Comment"
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
      />
      <Button
        title="Send"
        style={styles.button}
        onPress={() => console.log('send')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 2,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default PostCommentsFooter;
