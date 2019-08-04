import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import Home from './Components/Home';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h2>Welcome To Product Application</h2>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addProduct/" component={AddProduct} />
          <Route path="/editProduct/:id" component={EditProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
