export const REQUESTING_NEWS = "REQUESTING_NEWS";
export const REQUESTING_ERROR = "REQUESTING_ERROR";
export const REQUESTING_SUCCESS = "REQUESTING_SUCCESS";
export const GO_PREVIOUS_PAGE = "GO_PREVIOUS_PAGE";
export const GO_NEXT_PAGE = "GO_NEXT_PAGE";

const makeRequest = (param, url, dispatch) => {
  dispatch(requestingNews(true));
  dispatch(requestingError(false));
  fetch(`${url}${param}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(requestingNews(false));
      return response;
    })
    .then((response) => response.json())
    .then((news) => dispatch(requestingSuccess(news)))
    .catch((error) => dispatch(requestingError(true)));
};
// Retorna resultado de petición a la API de noticias
export const getNewsByCategory = (param) => (dispatch) =>
  makeRequest(param, "https://api.canillitapp.com/news/category/", dispatch);

export const getNewsByDate = (param) => (dispatch) =>
  makeRequest(param, "https://api.canillitapp.com/latest/", dispatch);

export const getNewsByKeyword = (param) => (dispatch) =>
  makeRequest(param, "https://api.canillitapp.com/search/", dispatch);

// Retorna acción tipo REQUESTING_NEWS y false si la petición finalizó, true caso contrario.
export const requestingNews = (inProgress) => ({
  type: REQUESTING_NEWS,
  inProgress
});

// Retorna acción tipo REQUESTING_ERROR y true si la petición fue erronea, false caso contrario.
export const requestingError = (isError) => ({
  type: REQUESTING_ERROR,
  isError
});

// Retorna acción tipo REQUESTING_SUCCESS y las noticias.
export const requestingSuccess = (news) => ({
  type: REQUESTING_SUCCESS,
  news
});

export const goPreviousPage = () => ({
  type: GO_PREVIOUS_PAGE
});

export const goNextPage = () => ({
  type: GO_NEXT_PAGE
});
