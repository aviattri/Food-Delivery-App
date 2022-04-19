export const ADD_FAVOURITE_ITEM = "ADD_FAVOURITE_ITEM";
export const UPDATE_FAVOURITE_LIST = "UPDATE_FAVOURITE_LIST";

export const setFavouriteListSuccess = (item) => ({
  type: ADD_FAVOURITE_ITEM,
  payload: { item: item },
});

export const setUpdateFavouriteListSucess = (item) => ({
  type: UPDATE_FAVOURITE_LIST,
  payload: { item: item },
});

export function setFavouriteList(item) {
  return (dispatch) => dispatch(setFavouriteListSuccess(item));
}

export function setUpdateFavouiteList(item) {
  return (dispatch) => dispatch(setUpdateFavouriteListSucess(item));
}
