import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './search.scss';
class Search extends Component {
  render() {
    return (
        <div className="search-container" >
            <TextField
                id="filled-uncontrolled"
                label="I would like to eat...."
                margin="normal"
                variant="outlined"
                className="banner-search"
            />
            <Button variant="contained" color="primary" className="searchBtn"> Search Food </Button>
        </div> 
    );
  }
}


export default Search;