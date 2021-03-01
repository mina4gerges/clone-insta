import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useUserInfo from '../../../hooks/useUserInfo';

const PostHeader = () => {
  const {fullName} = useUserInfo();
  return (
    <View>
      <Text style={styles.title}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default PostHeader;
