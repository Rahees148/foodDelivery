import React, { Component } from 'react';


import HeroBanner from '../../components/heroBanner/heroBanner';
import Location from '../../components/location/location';
import MostPopular from '../../components/mostPopular/mostPopular';
import EasySteps from '../../components/easySteps/easySteps';
import FeaturedRestaurants from '../../components/featuredRestaurants/featuredRestaurants';

class Home extends Component {
  render() {
    return (
      <div className="wrapper" >
        <HeroBanner />
        <Location />
        <section className="bg-gray">
          <MostPopular />
        </section>
        <EasySteps />
        <FeaturedRestaurants />
      </div>
    );
  }
}

export default Home;
