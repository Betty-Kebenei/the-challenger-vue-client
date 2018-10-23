import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use( config => {
  const access_token = localStorage.getItem('access-token');

  if (access_token) {
    if (config.method !== 'OPTIONS') {
        config.headers.token = `${access_token}`;
        }
  }
  return config;
}, function (error) {
   return promise.reject(error);
});

export default instance;