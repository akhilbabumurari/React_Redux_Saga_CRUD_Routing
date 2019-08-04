import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProducts } from "../actions/productSagaActions";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    //Initialize the state
    this.state = {
      id: "",
      name: "",
      description: "",
      price: "",
      idValid: false,
      nameValid: false,
      descriptionValid: false,
      priceValid: false,
      formErrors: { id: "", name: "", description: "", price: "" },
      formValid: false
    };
  }

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
    let idValid = this.state.idValid;
    let nameValid = this.state.nameValid;
    let descriptionValid = this.state.descriptionValid;
    let priceValid = this.state.priceValid;
    let fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case "id":
        idValid = value.match(/^[0-9]*$/) && value.length === 2;
        fieldValidationErrors.id = idValid
          ? " "
          : "Please enter only number less than 100";
        break;
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

    this.setState(
      {
        formErrors: fieldValidationErrors,
        idValid: idValid,
        nameValid: nameValid,
        descriptionValid: descriptionValid,
        priceValid: priceValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.descriptionValid &&
        this.state.priceValid
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const product = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    };
    this.props.addProducts(product).then(this.props.history.push("/"));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3 className="col-sm-6">Please Add Product Details</h3>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">ID:</label>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
              className="form-control col-md-3"
            />
            <small style={{ marginLeft: 10 }}>{this.state.formErrors.id}</small>
          </div>

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
                disabled={!this.state.formValid}
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
  { addProducts }
)(AddProduct);
