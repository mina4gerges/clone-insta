import React, {createContext, useReducer} from 'react';
import postsReducer from '../reducer/postsReducer';

const initialValue = {
  users: [],
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
