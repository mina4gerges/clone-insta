import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Post from './Post';
import data from '../../constant/data.json';

const Posts = () => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          {data.data.map(({user, posts}) => (
            <Post user={user} posts={posts} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default Posts;
