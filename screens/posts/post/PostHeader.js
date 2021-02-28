import React from 'react';
import {View, Text} from 'react-native';
import useUserInfo from '../../../hooks/useUserInfo';

const PostHeader = () => {
  const {fullName} = useUserInfo();
  return (
    <View>
      <Text>{fullName}</Text>
    </View>
  );
};

export default PostHeader;
