import { type } from "os";

const initialState = {
    userInput: '',
    name: '',
    temp: '',
    pressure: '',
    humidity: '',
    temp_min: '',
    temp_max: '',
    wind: '',
    searchHistory : [],
}

 function searchReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type){
        case 'GET_WEATHER_FULFILLED': {
            return { 
                ...state,
                name: payload.data.name,
                temp: payload.data.main.temp + 'F',
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity + '%',
                temp_min: payload.data.main.temp_min + 'F',
                temp_max: payload.data.main.temp_max + 'F',
                wind: payload.data.wind.speed + 'mph',
                searchHistory: [...state.searchHistory, {
                    city: payload.data.name, 
                    date: new Date().toLocaleString()
                  }],
        }
    }
            case 'GET_NEW_CITY': {
                return {
                    ...state,
                    userInput: payload
                }
            } 
                default: return state;
        
        }
}
export default searchReducer