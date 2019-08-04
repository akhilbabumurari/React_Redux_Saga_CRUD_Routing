import { FETCH_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS } from "./types";
import axios from "axios";

export const fetchProducts = (uID) => dispatch => {
    axios.get(`http://localhost:8000/products`).then(res => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data
        });
    });
};

export const addProducts = (data) => dispatch => {
    axios
        .post(`http://localhost:8000/products`, data)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTS,
                payload: res.data
            });
        });
};

export const deleteProducts = (pId) => dispatch => {
    axios
        .delete(`http://localhost:8000/products/${pId}`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTS,
                payload: res.data
            });
        });
};

export const editProducts = (data) => dispatch => {
    let { id ,name,description,price ,uID} = data
    axios.put(`http://localhost:8000/products/${id}`,{name, description, price,uID}).then(res => {
            dispatch({
                type: EDIT_PRODUCTS,
                payload: res.data
            });
    }

    )
}