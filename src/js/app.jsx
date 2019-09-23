import React from 'react';

import Search from './components/SearchField/Search.jsx';
import View from './components/ViewField/View.jsx';

export default class App extends React.Component {
  render() {
    return (

         <div className='container'>
              <h1>SDCS Weather Application</h1>
         <Search/>
         <View/>
         </div>
    );
  }
}
