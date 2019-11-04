import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './restaurantListCard.scss';
class RestaurantListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : props.items
        }
    }
    
    componentDidMount() {
        console.log('items', this.state.items)
    }

  render() {
    const { items } = this.state;
    return (
        
        <Grid container justify="center" spacing={2}>
             {items.map(item => (
                <Grid key={item.id} item xs={12} md={6} className="restaurantList">
                    {item.name}
                </Grid>
          ))}
       </Grid>
        
    );
  }
}


export default RestaurantListCard;