import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case HttpCode.BAD_REQUEST:
        throw err;
      default:
        throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
