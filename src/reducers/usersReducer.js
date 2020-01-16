import { FETCH_USER } from '../actions';

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return [...state, payload];
    default:
      return state;
  }
}

export default usersReducer;