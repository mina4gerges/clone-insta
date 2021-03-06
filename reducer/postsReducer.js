import response from '../constant/data.json';
import {
  ADD_COMMENT,
  ADD_POST_ID,
  FETCH_DATA,
  REMOVE_POST_ID,
} from '../constant/actionsType';
import {getCurentDateTime} from '../global/functions';

const postsReducer = (state, action) => {
  switch (action.type) {
    // Fetch posts data to 'loggedInUser', all 'users' all users that added a post and 'posts' added by the users
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

    case ADD_COMMENT:
      let newCommentId;

      // Found post detail
      const foundPost = state.posts.find(
        (post) => post.id === action.payload.postId,
      );

      // Found comments that already exists
      let newComments = foundPost.comments;

      // Start get new comment Id
      if (newComments.length === 0) {
        newCommentId = `${foundPost.id.replace('post', 'comment')}-1`;
      } else {
        const lastComment = newComments[newComments.length - 1].id;
        const splitLastComment = lastComment.split('-');
        const lastCommentId = splitLastComment[splitLastComment.length - 1];
        splitLastComment[splitLastComment.length - 1] = `${+lastCommentId + 1}`;
        newCommentId = splitLastComment.join('-');
      }
      // End get new comment Id

      // Add new comment object
      newComments.push({
        id: newCommentId,
        dateTime: getCurentDateTime(),
        fullName: action.payload.fullName,
        comment: action.payload.newComment,
      });

      // Update the comments array
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.payload.postId
              ? {...post, comments: newComments}
              : post,
          ),
        ],
      };

    default:
      return state;
  }
};

export default postsReducer;
