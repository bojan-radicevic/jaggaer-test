import { API } from 'app/API';
import { API_URLS } from 'util/routes/apiUrls';

export const fetchData = () => API.get(API_URLS.DATA);
