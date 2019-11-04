import React, { Component } from 'react';
import { config } from '../../Constants';

import Container from '@material-ui/core/Container';
import FoodListCard from '../foodListCard/foodListCard';


import './mostPopular.scss';
class MostPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostPopularItem: {},
            isLoaded: false
        }
        this.getMostpoularDish = this.getMostpoularDish.bind(this);
    }
    componentDidMount() {
        this.getMostpoularDish();
    }

    getMostpoularDish() {
        const _this = this;
        fetch(config.api.MOST_POPULAR)
        .then(res => res.json())
        .then(
            (result) => {
              _this.setState({
                mostPopularItem: result,
                isLoaded: true
              });
            },
            (error) => {
              console.log(error);
            }
          )
    }
  render() {
    const { isLoaded, mostPopularItem } = this.state;
    if(!isLoaded){
        return <div>Loading...</div>;
    }
    else{
        return (
            <Container>
                <div className="mostPopular-container" >
                    <h2>Popular This Month In Your City</h2>
                    <p>The easiest way to your favourite food</p>
                    <FoodListCard items={mostPopularItem} />
                </div> 
            </Container>
        );
    }
  }
}


export default MostPopular;