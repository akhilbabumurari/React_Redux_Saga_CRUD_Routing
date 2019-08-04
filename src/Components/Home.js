import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts, deleteProducts } from "../actions/productSagaActions";
import Pagination from "./Pagination";

class Home extends Component {
  //Initialize the state
  state = {
    products: [],
    loading: true,
    editProduct: {
      id: "",
      name: "",
      description: "",
      price: "",
      _isMounted: false
    },
    modal: false,
    pageOfItems: []
  };

  //Pagination Function
  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  };

  //Life Cycle Methods to call API
  componentDidMount() {
    this.props.fetchProducts();
    this.setState({ _isMounted: true });
  }

  //Delete API Method
  onDelete = pId => {
    this.props.deleteProducts(pId);
  };

  //Handle onChange event
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //naviagtion to add Product
  navigateToNext = props => {
    this.props.history.push("/addProduct");
  };
  render() {
    const renderProducts = this.state.pageOfItems.map(product => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td style={{ margin: 10 }}>
          <Link
            className="btn btn-info btn-sm m-1"
            to={{
              pathname: `/editProduct/${product.id}`,
              state: {
                product
              }
            }}
          >
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger"
            style={{ marginLeft: 5 }}
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="container">
        <h3>Product List</h3>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">PRICE</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{renderProducts}</tbody>
        </table>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Pagination
            items={this.props.products}
            onChangePage={this.onChangePage}
          />
        </div>
        <button
          className="btn btn-success btn-small m-2"
          onClick={() => this.navigateToNext(this.props)}
        >
          AddProduct
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});
export default connect(
  mapStateToProps,
  { fetchProducts, deleteProducts }
)(Home);
