import React from 'react';

import { connect } from 'react-redux'

class History extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { searchHistory } = this.props;
        return (
            <div>
               <h3>Search History</h3>
               { searchHistory.map( (city, index) => {
            return (
                <li key={index}>
                  <p>{city.city}, {city.date}</p>
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