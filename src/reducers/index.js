import { combineReducers } from "redux";
import productSagaReducer from "./productSagaReducer";

export default combineReducers({
  products: productSagaReducer
});
