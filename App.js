/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PostsReducer} from './context/postsContext';
import Posts from './screens/posts/Posts';
import PostComments from './screens/postComments/PostComments';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<SafeAreaView>*/}
      <PostsReducer>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{title: 'Home'}}
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

export default App;
