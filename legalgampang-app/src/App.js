import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import orderList from "./components/order-list.component"; 
import serviceList from "./components/service-list.component";
import userList from "./components/users-list.component";
import userCreate from "./components/users-create.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/users/create" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Users
                </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/users/create" className="dropdown-item nav-link">Create User</Link>
                  </div>
                  
                </li>
                <li className="navbar-item">
                  <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/orders" className="nav-link">Orders</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/users" component={userList} />
          <Route path="/users/create" component={userCreate} />
        </div>
      </Router>
    );
  }
}

export default App;
