import React from 'react';

import { connect } from 'react-redux'

class History extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { searchHistory } = this.props;
        return (
            <div className = 'right-box'>
               <h1>Search History</h1>
               { searchHistory.map( (city, index) => {
            return (
                <li key={index}>
                  <p className = 'search-stamp'>{city.city}, {city.date}</p>
                </li>
              )}
            )}
          </div>
        )
    }
}

// export default History
function mapStateToProps(state){
    return {
        searchHistory: state.search.searchHistory,
        city: state.search.city
    }
}

export default connect(mapStateToProps)(History)