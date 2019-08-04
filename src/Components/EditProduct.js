import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editProducts } from "../actions/productSagaActions";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    //Initialize the state and get the props from products component.
    this.state = {
      id: this.props.location.state.product.id,
      name: this.props.location.state.product.name,
      description: this.props.location.state.product.description,
      price: this.props.location.state.product.price,
      nameValid: false,
      descriptionValid: false,
      priceValid: false,
      formErrors: { id: "", name: "", description: "", price: "" },
      formValid: false
    };
  }
  // Update product details function
  updateProduct = e => {
    e.preventDefault();
    const product = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    };
    this.props.editProducts(product);
    this.props.history.push("/");
  };

  //Change event for values
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  //validate the form
  validateField(fieldName, value) {
    let nameValid = this.state.nameValid;
    let descriptionValid = this.state.descriptionValid;
    let priceValid = this.state.priceValid;
    let fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case "name":
        nameValid = value.match(/^[A-Za-z ]*$/);
        fieldValidationErrors.name = nameValid
          ? " "
          : "Please enter only strings";
        break;
      case "description":
        descriptionValid = value.match(/^[A-Za-z ]*$/);
        fieldValidationErrors.description = descriptionValid
          ? " "
          : "Please enter only strings";
        break;
      case "price":
        priceValid = value.match(/^[0-9]*$/) && value.length <= 2;
        fieldValidationErrors.price = priceValid
          ? " "
          : "Please enter only number less than 100";
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      descriptionValid: descriptionValid,
      priceValid: priceValid
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.updateProduct}>
          <h5 className="col-sm-6">Please Edit Product Details</h5>
          <h5 className="col-sm-3">Edit Details for ID :{this.state.id}</h5>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control col-md-3"
            />
            <small style={{ marginLeft: 10 }}>
              {this.state.formErrors.name}
            </small>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="form-control col-md-3"
            />
            <small style={{ marginLeft: 10 }}>
              {this.state.formErrors.description}
            </small>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Price:</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              className="form-control col-md-3"
            />
            <small style={{ marginLeft: 10 }}>
              {this.state.formErrors.price}
            </small>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <input
                type="submit"
                value="Submit"
                color="primary"
                className="btn btn-primary"
              />
              <Link to="/" className="btn btn-danger m-2">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { editProducts }
)(EditProfile);
