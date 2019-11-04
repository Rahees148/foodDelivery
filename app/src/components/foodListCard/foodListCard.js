import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './foodListCard.scss';
class FoodListCard extends Component {
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
                <Grid key={item.id} item xs={12} md={4}>
                    <Card className="item-wrapper" >
                        <img src={item.image} alt={item.image} />
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="h5">
                                {item.dishName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {item.dishDescription}
                            </Typography>
                            <Button variant="outlined" >
                                Order Now
                            </Button>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={{fontSie:16}} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        </Card>
                        </Grid>
               
          ))}
          </Fragment>
        
    );
  }
}


export default FoodListCard;