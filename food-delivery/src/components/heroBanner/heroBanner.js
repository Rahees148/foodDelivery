import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Search from '../search/search';
import steps from '../../images/steps.png';

import './heroBanner.scss';
class HeroBanner extends Component {
  render() {
    return (
        <div className="hero-banner" >
          <Container >
            <h1>Order Delivery & Take-Out</h1>
            <h4>Find restaurants, specials, and coupons for free</h4>
            <Search />
            <img src={steps} alt="steps" className="bannerSteps" />
          </Container>
        </div> 
    );
  }
}


export default HeroBanner;
