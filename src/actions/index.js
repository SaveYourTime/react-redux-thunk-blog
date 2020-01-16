import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
}

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const { posts } = getState();
  const userIds = new Set(posts.map((post) => post.userId));
  userIds.forEach((id) => dispatch(fetchUser(id)));
}