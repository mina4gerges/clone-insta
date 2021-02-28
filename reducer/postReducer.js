import {UPDATE_POST} from '../constant/actionsType';

const postReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {...state, post: action.payload.post};
    default:
      return state;
  }
};

export default postReducer;
