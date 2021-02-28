import data from '../constant/data.json';
import {FETCH_DATA} from '../constant/actionsType';

const postsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        // Get all users
        users: data.data.reduce(
          (accumulator, currentValue) => accumulator.concat(currentValue.user),
          [],
        ),
        // Get all posts
        posts: data.data
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
    default:
      return state;
  }
};

export default postsReducer;
