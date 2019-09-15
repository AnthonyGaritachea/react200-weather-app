import axios from 'axios';

        // Actions 

export const getWeather = (userInput) => {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/weather/${userInput}`)
    }
}