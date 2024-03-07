import axios from 'axios';

export function getData({ title }: { title: string }) {
  return axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/${title}`)
    .then(function (response) {
      return response;
    });
}

export function saveYear({ title }: { title: string }) {
  return axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/years`, {
      title,
    })
    .then((res) => res.data);
}
