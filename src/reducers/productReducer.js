import { FETCH_PRODUCTS,ADD_PRODUCTS,DELETE_PRODUCTS,EDIT_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
      case ADD_PRODUCTS:
      return {
        ...state,
        product: action.payload
      };
      case DELETE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
      case EDIT_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
