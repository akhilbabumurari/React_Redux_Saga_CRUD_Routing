import {
  FETCH_PRODUCTS,
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS
} from "./types";

//Action for get Products
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

//Action for post Products
export const addProducts = addData => ({
  type: ADD_PRODUCTS,
  addData
});

//Action for edit Products
export const editProducts = editData => ({
  type: EDIT_PRODUCTS,
  editData
});

//Action for delete Products
export const deleteProducts = deleteData => ({
  type: DELETE_PRODUCTS,
  deleteData
});
