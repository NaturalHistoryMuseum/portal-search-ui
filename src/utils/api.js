import axios from 'axios';

const api = axios.create({
  baseURL: 'https://data.nhm.ac.uk/api/3/action/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function post(action, body) {
  return api.post(action, body).then((response) => {
    return response.data;
  });
}

export function get(action) {
  return api.get(action).then((response) => {
    return response.data;
  });
}
