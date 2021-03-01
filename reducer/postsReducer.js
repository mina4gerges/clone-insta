import response from '../constant/data.json';
import {ADD_POST_ID, FETCH_DATA, REMOVE_POST_ID} from '../constant/actionsType';

const postsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,

        // Logged in user data
        loggedInUser: response.loggedInUser,

        // All users data that added a post
        users: response.data.reduce(
          (accumulator, currentValue) => accumulator.concat(currentValue.user),
          [],
        ),

        // All app posts
        posts: response.data
          .reduce(
            (accumulator, currentValue) =>
              accumulator.concat(currentValue.posts),
            [],
          )
          // Sort by dateTime (form latest to oldest post)
          .sort((firstEl, secondElem) =>
            firstEl.dateTime < secondElem.dateTime ? 1 : -1,
          ),
      };

    case REMOVE_POST_ID:
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          likedPostIds: state.loggedInUser.likedPostIds.filter(
            (id) => id !== action.payload.postId,
          ),
        },
      };

    case ADD_POST_ID:
      let newLikedPostIds = state.loggedInUser.likedPostIds;
      newLikedPostIds.push(action.payload.postId);

      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          likedPostIds: newLikedPostIds,
        },
      };

    default:
      return state;
  }
};

export default postsReducer;
