export const ADD_FAVOURITE_ITEM = "ADD_FAVOURITE_ITEM";
export const UPDATE_FAVOURITE_LIST = "UPDATE_FAVOURITE_LIST";

export const setFavouriteListSuccess = (item) => ({
  type: ADD_FAVOURITE_ITEM,
  payload: { item: item },
});

export const setUpdateFavouriteListSucess = (list) => ({
  type: UPDATE_FAVOURITE_LIST,
  payload: { list },
});

export function setFavouriteList(item) {
  return (dispatch) => dispatch(setFavouriteListSuccess(item));
}

export function setUpdateFavouiteList(list) {
  return (dispatch) => dispatch(setUpdateFavouriteListSucess(list));
}
