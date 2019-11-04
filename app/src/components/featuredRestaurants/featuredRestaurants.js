import React, { Component } from 'react';
import { config } from '../../Constants';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import RestaurantListCard from '../restaurantListCard/restaurantListCard';


import './featuredRestaurants.scss';
class FeaturedRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredRestaurants: {},
            isLoaded: false
        }
        this.getMostpoularDish = this.getMostpoularDish.bind(this);
    }
    componentDidMount() {
        this.getMostpoularDish();
    }

    getMostpoularDish() {
        const _this = this;
        fetch(config.api.Featured_Restaurants)
        .then(res => res.json())
        .then(
            (result) => {
              _this.setState({
                featuredRestaurants: result,
                isLoaded: true
              });
            },
            (error) => {
              console.log(error);
            }
          )
    }
  render() {
    const { isLoaded, featuredRestaurants } = this.state;
    if(!isLoaded){
        return <div>Loading...</div>;
    }
    else{
        return (
          <section className="featuredRestaurant">
            <Container>
                <div className="featuredRestaurant-container" >
                    <h2>Featured Restaurant In Your Area</h2>
                    <p className="subHead">The easiest way to your favourite Restaurant</p>
                    <Grid container justify="center" spacing={4}>
                      <RestaurantListCard items={featuredRestaurants} />
                    </Grid>
                </div> 
            </Container>
          </section>
        );
    }
  }
}


export default FeaturedRestaurants;