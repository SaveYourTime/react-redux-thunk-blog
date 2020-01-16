import { FETCH_POSTS } from '../actions';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
}

export default postsReducer;