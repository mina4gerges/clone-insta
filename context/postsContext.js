import React, {createContext, useReducer} from 'react';
import postsReducer from '../reducer/postsReducer';

// Posts context, contains 'loggedInUser' data (name, fullName), 'users' all users that added a post
// 'posts' all posts added by the users
const initialValue = {
  // Logged in user data
  loggedInUser: {},
  // All users data that added a post
  users: [],
  // All app posts
  posts: [],
};

export const PostsContext = createContext(initialValue);

export const PostsReducer = ({children}) => {
  const [state, dispatch] = useReducer(postsReducer, initialValue, undefined);

  return (
    <PostsContext.Provider value={{state, dispatch}}>
      {children}
    </PostsContext.Provider>
  );
};
