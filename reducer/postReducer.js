import {
  DECREMENT_LIKES,
  INCREMENT_LIKES,
  UPDATE_POST,
} from '../constant/actionsType';

const postReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {...state, post: action.payload.post};
    case INCREMENT_LIKES:
      return {...state, post: {...state.post, likes: state.post.likes + 1}};
    case DECREMENT_LIKES:
      return {...state, post: {...state.post, likes: state.post.likes - 1}};
    default:
      return state;
  }
};

export default postReducer;
