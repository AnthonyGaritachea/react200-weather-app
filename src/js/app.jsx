import React from 'react';

import Search from './components/SearchField/Search.jsx';
import View from './components/ViewField/View.jsx';
import History from './components/HistoryField/History.jsx'

export default class App extends React.Component {
  render() {
    return (

         <div className='container'>
              <h1>SDCS Weather Application</h1>
         <Search/>
         <View/>
         <History/>
         </div>
    );
  }
}
