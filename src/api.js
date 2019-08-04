import axios from "axios";

//Get Products API
export const fetchData = () => {
  try {
    const res = axios.get("http://localhost:8000/products").then(response => {
      return response.data;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

//Create Products API
export const addData = postData => {
  try {
    const res = axios
      .post(`http://localhost:8000/products`, postData)
      .then(res => {
        return res.data;
      });
    return res;
  } catch (e) {
    console.log(e);
  }
};

//Edit Products API
export const editData = postData => {
  try {
    let { id, name, description, price } = postData;
    const res = axios
      .put(`http://localhost:8000/products/${id}`, {
        id,
        name,
        description,
        price
      })
      .then(res => {
        return res.data;
      });
    return res;
  } catch (e) {
    console.log(e);
  }
};

//Delete Products API
export const deleteData = pId => {
  try {
    const res = axios
      .delete(`http://localhost:8000/products/${pId}`)
      .then(res => {
        return res.data;
      });
    return res;
  } catch (e) {
    console.log(e);
  }
};
