import axios from 'axios';

import { BASE_URL } from '../../config';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
