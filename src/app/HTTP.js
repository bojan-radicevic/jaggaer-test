import axios from 'axios';

export const HTTP = axios.create({
  baseURL:
    process.env.API_URL || 'https://jaggaer-test-213702898a53.herokuapp.com/'
});
