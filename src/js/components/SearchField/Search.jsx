import React from 'react';

        //  Import Actions 
import getWeather from './searchActions'

class Search extends React.Component{
    constructor(props){
        super(props)

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event){
        const { value } = e.target
        dispatch(getWeather(value))
    }

    render(){
        return (
            <div>
              <input className = 'search-bar' type = 'text' />
              <button onClick = {this.handleSearch} value = {value}>Search</button>
            </div>
        )
    }
}

export default Search