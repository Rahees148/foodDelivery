import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Nav from '../navigation/navigation';
import foodDelivery from '../../images/food-delivery.png';

import './header.scss';
class Header extends Component {
  render() {
    return (
        <header className="header" >
          <Container >
            <img src={foodDelivery} alt="Food Delivery" className="app-logo" />
            <Nav/>
          </Container>
        </header> 
    );
  }
}


export default Header;
