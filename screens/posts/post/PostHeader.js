import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useUserInfo from '../../../hooks/useUserInfo';
import ImageComp from '../../../components/ImageComp';
import {PostContext} from '../../../context/postContext';
import {
  DEFAULT_USER_IMAGE,
  DEFAULT_USER_IMAGE_ALT,
} from '../../../constant/default';

const PostHeader = () => {
  const {fullName, image} = useUserInfo();
  const {
    state: {
      post: {location},
    },
  } = useContext(PostContext);

  return (
    <View style={styles.postHeaderContainer}>
      <ImageComp
        width={35}
        height={35}
        source={image ?? DEFAULT_USER_IMAGE}
        alt={DEFAULT_USER_IMAGE_ALT}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{fullName}</Text>
        <Text style={styles.subTitle}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: 'row',
  },
  titles: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: 13,
    color: 'grey',
  },
});

export default PostHeader;
