import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Dropdown from 'react-boot'

import orderList from "./components/order-list.component"; 
import serviceList from "./components/service-list.component";
import servicesCreate from "./components/service-create.component";
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
                
                <li className="navbar-item">
                <Link to="/users" className="nav-link">View Users</Link>
                </li>
                  
                  <li className="navbar-item">
                  <Link to="/users/create" className="dropdown-item nav-link">Create User</Link>
                  </li>
                  
                
                <li className="navbar-item">
                  <Link to="/services/create" className="nav-link">Services</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/orders" className="nav-link">Orders</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path="/users" component={userList} />
          <Route exact path="/users/create" component={userCreate} />
          <Route exact path="/services/create" component={servicesCreate} />
        </div>
      </Router>
    );
  }
}

export default App;
