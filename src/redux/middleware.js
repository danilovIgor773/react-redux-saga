import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

const forbiddenWordsList = ["funk", "rap", "php", "windows"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        const foundWord = forbiddenWordsList.filter((word) =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          const alertMessage =
            "Forbidden words detected. Unable to create post";
          return dispatch(showAlert(alertMessage));
        }
      }
      return next(action);
    };
  };
};
