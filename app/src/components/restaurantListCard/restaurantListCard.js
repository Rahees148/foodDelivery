import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

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
        
        <Fragment>
             {items.map(item => (
                <Grid key={item.id} item xs={12} md={6} >
                    <div className="restaurantList">
                        <div className="rest-thumbnail">
                                <div className="image"></div>
                        </div>
                        <div className="rest-info"> 
                            <Typography variant="h5" color="textSecondary" component="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.address}
                            </Typography>
                        </div>  
                    </div>
                </Grid>
          ))}
        </Fragment>
    );
  }
}


export default RestaurantListCard;