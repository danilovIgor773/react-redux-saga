import { FETCH_POST, REQUEST_POSTS } from "./types";
import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showLoader, showAlert } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log("sagaWorker error", error);
    yield put(showAlert("Something went wrong!"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return await response.json();
}
