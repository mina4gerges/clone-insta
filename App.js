/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PostsReducer} from './context/postsContext';
import Posts from './screens/posts/Posts';
import PostComments from './screens/postComments/PostComments';
import IconButton from './components/IconWithText';
import ImageComp from './components/ImageComp';
import {DEFAULT_USER_IMAGE, DEFAULT_USER_IMAGE_ALT} from './constant/default';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
    <>
      {/*<StatusBar barStyle="dark-content" />*/}
      {/*<SafeAreaView>*/}
      <PostsReducer>
        <NavigationContainer>
          <Stack.Navigator headerLayoutPreset={'center'}>
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{
                headerTitleAlign: 'center',
                headerTitle: () => (
                  <View>
                    <ImageComp
                      width={50}
                      height={50}
                      source={DEFAULT_USER_IMAGE}
                      alt={DEFAULT_USER_IMAGE_ALT}
                    />
                  </View>
                ),
                headerRight: () => (
                  <View style={styles.headerRight}>
                    <IconButton
                      iconStyle={styles.headerIcon}
                      iconName="refresh"
                      onPress={null}
                    />
                    <IconButton
                      iconStyle={styles.headerIcon}
                      onPress={null}
                      iconName="message-text-outline"
                    />
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="PostComments"
              component={PostComments}
              options={{title: 'Comments'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/*</SafeAreaView>*/}
      </PostsReducer>
    </>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    color: 'orangered',
  },
});

export default App;
