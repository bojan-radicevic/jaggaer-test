import axios from 'axios';

import { PRODUCTION_URL } from 'util/constants/defaultValues';

export const API = axios.create({
  baseURL: process.env.API_URL || PRODUCTION_URL
});
