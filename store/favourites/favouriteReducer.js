import * as favouriteActionTypes from "./favouriteActions";

const intialState = {
  favourites: [],
};

const FavouiteReducer = (state = intialState, action) => {
  switch (action.type) {
    case favouriteActionTypes.ADD_FAVOURITE_ITEM: {
      const foodItem = state.favourites?.find(
        (item) => item.name === action.payload.item.name
      );
      // let updateList = [];
      //if item exits, then change the favourite Status
      if (foodItem) {
        // updateList = state.favourites.map((item) =>
        //   item.name === action.payload.item.name
        //     ? {
        //         ...item,
        //         isFavourite: true,
        //       }
        //     : item
        // );
        return {
          ...state,
          favourites: state.favourites,
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, action.payload.item],
        };
      }
    }
    case favouriteActionTypes.UPDATE_FAVOURITE_LIST: {
      let newFavList = [state.favourites];
      let index = state.favourites.findIndex(
        (item) => item.id === action.payload.item.id
      );
      newFavList.splice(index, 1);

      return {
        ...state,
        favourites: newFavList,
      };
    }
    default:
      return state;
  }
};
export default FavouiteReducer;
