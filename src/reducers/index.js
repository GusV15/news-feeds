import { combineReducers } from "redux";
import {
  REQUESTING_NEWS,
  REQUESTING_ERROR,
  REQUESTING_SUCCESS
} from "../actions";

const requestingError = (state = false, action) => {
  switch (action.type) {
    case REQUESTING_ERROR:
      return action.isError;
    default:
      return state;
  }
};

const requestingNews = (state = false, action) => {
  switch (action.type) {
    case REQUESTING_NEWS:
      return action.inProgress;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case REQUESTING_SUCCESS:
      if (action.news[0].category === "Diseño") {
        let fixNews = action.news.map((data) => ({
          ...data,
          bayes_category_id: 6
        }));
        return fixNews;
      }
      return action.news;
    default:
      return state;
  }
};

export default combineReducers({
  news,
  requestingNews,
  requestingError
});
