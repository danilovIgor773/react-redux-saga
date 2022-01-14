import {
  CREATE_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS,
} from "./types";

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const showAlert = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
};

// return async (dispatch) => {
//   try {
//     dispatch(showLoader());
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=5"
//     );
//     const json = await response.json();
//     dispatch({ type: FETCH_POST, payload: json });
//     dispatch(hideLoader());
//   } catch (error) {
//     dispatch(showAlert("Something went wrong!"));
//     dispatch(hideLoader());
//   }
// };
