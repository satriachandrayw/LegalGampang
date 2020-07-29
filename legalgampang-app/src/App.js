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
import UserUpdate from './components/users-edit.component';
import serviceUpdate from "./components/services-edit.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">LegalGampang Backend</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                
                <li className="navbar-item">
                <Link to="/users" className="nav-link">List Users</Link>
                </li>
                  
                  <li className="navbar-item">
                  <Link to="/users/create" className="dropdown-item nav-link">Create User</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/services" className="nav-link">List Services</Link>
                </li>
                
                <li className="navbar-item">
                  <Link to="/services/create" className="nav-link">Create Service</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/orders" className="nav-link">List Orders</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path="/users" component={userList} />
          <Route exact path="/users/create" component={userCreate} />
          <Route exact path="/services/create" component={servicesCreate} />
          <Route exact path="/users/update/:id" component={UserUpdate} />
          <Route exact path="/services" component={serviceList} />
          <Route exact path="/services/update/:id" component={serviceUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
