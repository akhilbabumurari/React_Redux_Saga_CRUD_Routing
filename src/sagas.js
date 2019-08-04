import { call, put, takeEvery, take, all } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS
} from "./actions/types";
import { fetchData, addData, editData, deleteData } from "./api";

// worker Saga for Fetching products data

function* getApiData() {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put({ type: "RECIEVED_PRODUCTS", data: data });
  } catch (e) {
    console.log(e);
  }
}

// worker Saga for Adding products data
function* addApiData(postData) {
  try {
    // do an api call
    const data = yield call(addData, postData);
    yield put({ type: "ADDED_PRODUCTS", data: data });
  } catch (e) {
    console.log(e);
  }
}

// worker Saga for Editing products data
function* editApiData(postData) {
  try {
    // do an api call
    const data = yield call(editData, postData);
    yield put({ type: "EDITED_PRODUCTS", data: data });
  } catch (e) {
    console.log(e);
  }
}

// worker Saga for Deleting products data
function* deleteApiData(ddata) {
  try {
    // do an api call
    const data = yield call(deleteData, ddata);
    yield put({ type: "DELETED_PRODUCTS", data: data });
  } catch (e) {
    console.log(e);
  }
}

//watcher Saga for saga to run
export default function* mySaga() {
  yield takeEvery(FETCH_PRODUCTS, getApiData);
  yield all([deleteDataSaga(), editDataSaga(), addDataSaga()]);
}

//calling  AddProducts
function* addDataSaga() {
  const { addData } = yield take(ADD_PRODUCTS);
  yield call(addApiData, addData);
}

//calling  DeleteProducts
function* deleteDataSaga() {
  const { deleteData } = yield take(DELETE_PRODUCTS);
  yield call(deleteApiData, deleteData);
}

//calling  EditProducts
function* editDataSaga() {
  const { editData } = yield take(EDIT_PRODUCTS);
  yield call(editApiData, editData);
}
