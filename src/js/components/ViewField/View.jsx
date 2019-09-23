import React from 'react';
import { connect } from 'react-redux';

class View extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            name,
            temp,
            pressure,
            humidity,
            temp_min,
            temp_max,
            wind 
          } = this.props;

        return (
               <div className='container'>
                   <h1>City Information</h1>

                        <div className = 'main-city'>
                            <h1>City: {name}</h1>
                        </div>

                        <div className = 'row-1'>
                                <div className = 'box-1'>
                                    <h3>Temperature (F)</h3>
                                    <p>{temp}F</p>
                                </div>
                                <div className = 'box-2'>
                                    <h3>Pressure</h3>
                                    <p>{pressure}</p>
                                </div>
                                <div className = 'box-3'>
                                    <h3>Humidity</h3>
                                    <p>{humidity}%</p>
                                </div>
                        </div>

                        <div className = 'row-2'>
                                <div className = 'box-1'>
                                    <h3>Lowest Temp(F)</h3>
                                    <p>{temp_min}F</p>
                                </div>
                                <div className = 'box-2'>
                                    <h3>Highest Temp</h3>
                                    <p>{temp_max}F</p>
                                </div>
                                <div className = 'box-3'>
                                    <h3>Wind Speed</h3>
                                    <p>{wind}mph</p>
                                </div>
                        </div>   
               </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    name: state.search.name,
    temp: state.search.temp,
    pressure: state.search.pressure,
    humidity: state.search.humidity,
    temp_min: state.search.temp_min,
    temp_max: state.search.temp_max,
    wind: state.search.wind
  };
}

export default connect(mapStateToProps)(View);
