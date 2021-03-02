import React, {useReducer, createContext} from 'react';
import postReducer from '../reducer/postReducer';

// Post context, contains 'post' detail (comments, likes, ...)
const initialValue = {
  // Post data
  post: {},
};

export const PostContext = createContext(initialValue);

export const PostProvider = ({children}) => {
  const [state, dispatch] = useReducer(postReducer, initialValue, undefined);

  return (
    <PostContext.Provider value={{state, dispatch}}>
      {children}
    </PostContext.Provider>
  );
};
