import React from 'react';
import { connect } from 'react-redux';

        //  Import Actions 
import { getWeather, userCitySearch} from './searchActions.js';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonSearch = this.handleButtonSearch.bind(this);
    }

    handleButtonSearch(event){
        const { dispatch } = this.props;
        dispatch(getWeather(event.target.value))
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
                <button className = 'city-button' onClick = {this.handleButtonSearch} value = 'San Diego'>San Diego</button>
                <button className = 'city-button' onClick = {this.handleButtonSearch} value = 'New York'>New York</button>
                <button className = 'city-button' onClick = {this.handleButtonSearch} value = 'Tokyo'>Tokyo</button>

                <br/>

               <input className = 'search-bar' type = 'text' onChange = {this.handleChange}/>
               <button className = 'search-button' onClick = {this.handleSearch} >Search</button>
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