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
      <Button title="Send" onPress={null} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  postCommentContainer: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default PostCommentsFooter;
