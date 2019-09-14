import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div>
              <input className = 'search-bar' type = 'text' />
            </div>
        )
    }
}

export default Search