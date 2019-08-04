const initialState = {
  products: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "RECIEVED_PRODUCTS":
      return {
        ...state,
        products: action.data
      };
    case "ADDED_PRODUCTS":
      return {
        // state mutates here
        ...state,
        product: action.data
      };
    case "EDITED_PRODUCTS":
      return {
        // state mutates here
        ...state,
        products: action.data
      };
    case "DELETED_PRODUCTS":
      return {
        // state mutates here
        ...state,
        products: action.data
      };
    default:
      return state;
  }
}
