import { combineReducers } from "redux";
import {
  REQUESTING_NEWS,
  REQUESTING_ERROR,
  REQUESTING_SUCCESS,
  GO_PREVIOUS_PAGE,
  GO_NEXT_PAGE
} from "../actions";

const initialState = {
  isError: false,
  inProgress: false,
  news: [],
  limit: 10,
  offset: 0,
  currentPage: 1,
  blocked: "previous"
};

const requestingError = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_ERROR:
      return { ...state, isError: action.isError };
    default:
      return state;
  }
};

const requestingNews = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_NEWS:
      return { ...state, inProgress: action.inProgress };
    default:
      return state;
  }
};

const resultNews = (state = initialState, action) => {
  const { currentPage, offset, limit } = state;
  switch (action.type) {
    case REQUESTING_SUCCESS:
      state = initialState;
      if (action.news[0].category === "Diseño") {
        let fixNews = action.news.map((data) => ({
          ...data,
          bayes_category_id: 6
        }));
        return { ...state, news: fixNews };
      }
      return { ...state, news: action.news };
    case GO_PREVIOUS_PAGE:
      let prevState = {
        ...state,
        offset: offset - limit,
        currentPage: currentPage - 1,
        blocked: ""
      };
      if (prevState.currentPage >= prevState.news.length / prevState.limit) {
        prevState = { ...prevState, blocked: "next" };
      } else if (prevState.offset <= 0) {
        prevState = { ...prevState, blocked: "previous" };
      }
      return prevState;
    case GO_NEXT_PAGE:
      let nextState = {
        ...state,
        offset: offset + limit,
        currentPage: currentPage + 1,
        blocked: ""
      };
      if (nextState.currentPage >= nextState.news.length / nextState.limit) {
        nextState = { ...nextState, blocked: "next" };
      } else if (nextState.offset <= 0) {
        nextState = { ...nextState, blocked: "previous" };
      }
      return nextState;
    default:
      return state;
  }
};

export default combineReducers({
  resultNews,
  requestingNews,
  requestingError
});
