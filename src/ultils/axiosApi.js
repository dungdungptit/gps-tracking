import axios from 'axios';

export const assetUrl = 'https://maps.cleverapps.io/';
export const BASE_URL = axios.defaults.baseURL = 'https://maps.cleverapps.io/api/v1';
export const BASE_URL_AUTH = 'https://maps.cleverapps.io/api/auth';
// export const assetUrl = 'https://map-ws-exp.cleverapps.io/';
// export const BASE_URL = axios.defaults.baseURL = 'https://map-ws-exp.cleverapps.io/api/v1';
// export const BASE_URL_AUTH = 'https://map-ws-exp.cleverapps.io/api/auth';


export const token = JSON.parse(localStorage.getItem('token'));