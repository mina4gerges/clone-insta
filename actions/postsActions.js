import {ADD_COMMENT, FETCH_DATA} from '../constant/actionsType';

export const fetchData = (dispatch) => {
  dispatch({type: FETCH_DATA});
};

export const addComment = (dispatch, postId, newComment, loggedInUser) => {
  // Add a new comment if it is not empty
  if (newComment !== '') {
    dispatch({
      type: ADD_COMMENT,
      payload: {
        postId,
        newComment,
        fullName: loggedInUser.fullName,
      },
    });
  }
};
