import { combineReducers } from "redux";
import { postReducer } from "./postsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  allPosts: postReducer,
  app: appReducer,
});
