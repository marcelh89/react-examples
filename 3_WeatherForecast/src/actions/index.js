import axios from 'axios';

const API_KEY = '5192aabe2808875797051a9a8e257225';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},ger`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload : request
  };
}
