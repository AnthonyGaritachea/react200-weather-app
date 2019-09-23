import axios from 'axios'

        // Actions 
export function getWeather(userInput){
    return {
        type: 'GET_WEATHER', 
        payload: axios.get(`/weather/${userInput}`) 
      }
}

export const userCitySearch = userInput => {
    return {
        type:'GET_NEW_CITY',
        payload: userInput
    }
}