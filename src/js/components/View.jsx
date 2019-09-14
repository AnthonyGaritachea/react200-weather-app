import React from 'react';

class View extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
               <div className='container'>
                   <h1>City Information</h1>

                        <div className = 'main-city'>
                            <h1>Tokyo</h1>
                            <p>Lat/Long: 35.69, 139.69</p>
                        </div>

                        <div className = 'row-1'>
                            <div className = 'box-1'>
                                <h3>Temperature (F)</h3>
                                <p>65.62F</p>
                            </div>
                            <div className = 'box-2'>
                                <h3>Pressure</h3>
                                <p>997</p>
                            </div>
                            <div className = 'box-3'>
                                <h3>Humidity</h3>
                                <p>39%</p>
                            </div>
                        </div>

                        <div className = 'row-2'>
                            <div className = 'box-1'>
                                <h3>Lowest Temp(F)</h3>
                                <p>62.01F</p>
                            </div>
                            <div className = 'box-2'>
                                <h3>Highest Temp</h3>
                                <p>71.01F</p>
                            </div>
                            <div className = 'box-3'>
                                <h3>Wind Speed</h3>
                                <p>24.16mph</p>
                            </div>
                        </div>
                        
               </div>
        )
    }
}

export default View