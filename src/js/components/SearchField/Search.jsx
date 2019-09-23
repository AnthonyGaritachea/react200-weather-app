import React from 'react';
import { connect } from 'react-redux';

        //  Import Actions 
import { getWeather, userCitySearch } from './searchActions.js';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { dispatch } = this.props;
        dispatch(userCitySearch(event.target.value));
    }

    handleSearch(){
        const { userInput, dispatch } = this.props;
        dispatch(getWeather(userInput)); 
    }

    render() {
        return (
            <div>
              <input className = 'search-bar' type = 'text' onChange = {this.handleChange}/>
              <button onClick = {this.handleSearch} >Search</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      userInput: state.search.userInput 
    };
  }

  export default connect(mapStateToProps)(Search);