import React from 'react';
import {View, Text} from 'react-native';

const Post = ({user, posts}) => {
  return (
    <View>
      <Text> Post for {user.fullName} </Text>
    </View>
  );
};

export default Post;
