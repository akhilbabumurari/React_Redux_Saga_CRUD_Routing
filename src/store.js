import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import mySaga from "./sagas";

//Initialise saga middleware
const sagaMiddleware = createSagaMiddleware();
//creating the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//saga run
sagaMiddleware.run(mySaga);

export default store;
