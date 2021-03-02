import {useState, useEffect, useContext} from 'react';
import {PostsContext} from '../context/postsContext';
import {PostContext} from '../context/postContext';

// Custom hook to get useInfo that added a post
const useUserInfo = () => {
  const [useInfo, setUserInfo] = useState({});

  const {
    state: {users},
  } = useContext(PostsContext);

  const {
    state: {
      post: {userId},
    },
  } = useContext(PostContext);

  useEffect(() => {
    setUserInfo(users?.find((user) => user.id === userId) ?? {});
  }, [userId, users]);

  return useInfo;
};

export default useUserInfo;
