import axios from 'axios';

export default axios.create({
  baseURL: 'http://fc2f-2407-aa80-15-4489-c035-bde1-cfcc-705.ngrok.io',
});

// export const axiosInstance = axios.create({
//   baseURL: 'http://c719-2407-aa80-15-3fd9-30e2-6de4-8f13-d3f1.ngrok.io',
// });

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response.data;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
