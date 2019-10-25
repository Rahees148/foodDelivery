import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
class Nav extends Component {
  render() {
    return (
        <nav className="main-nav" >
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/food">Food</Link></li>
              <li><Link to="/restuarent">Restuarent</Link></li>
              <li><Link to="/help">Help</Link></li>
          </ul>
        </nav> 
    );
  }
}


export default Nav;
