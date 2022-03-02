import React from 'react';
import axios, { AxiosResponse, CancelToken } from 'axios';

export const useGetCancelToken = () => {
  return;
};

export const fetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

export default fetcher;
