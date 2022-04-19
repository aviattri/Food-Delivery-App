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
        console.log(action.payload.item.isFavourite);
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
      return {
        ...state,
        favourites: action.payload.list,
      };
    }
    default:
      return state;
  }
};
export default FavouiteReducer;
