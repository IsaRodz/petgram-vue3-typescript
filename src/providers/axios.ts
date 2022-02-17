import axios, { HeadersDefaults } from 'axios';

interface CustomHeaders extends HeadersDefaults {
  'app-id': string;
}

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers = {
  'app-id': process.env.VUE_APP_APP_ID || 'xxxxxx' // here goes your api key
} as CustomHeaders;
