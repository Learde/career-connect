import axios from "axios";

import { isFunction } from "../lib";

// Constants
const BASE_URL = window.BASE_URL ?? "http://51.250.105.58/api/";

// Variables
let token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMZWFyZGUiLCJpYXQiOjE2ODUyNzI1MDUsImV4cCI6MTY4NTI3Mzk0NX0.FdopGnxZc-QMpniXlylZ6LQ9qt3J3p-jLkBh5li2Q10";
let handleResponseFulfilled = null;
let handleResponseRejected = null;

const httpInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

httpInstance.defaults.trailingSlash = true;
httpInstance.interceptors.response.use(
    (response) => {
        handleResponseFulfilled && handleResponseFulfilled();

        return response;
    },
    (error) => {
        handleResponseRejected && handleResponseRejected(error);

        return Promise.reject(error);
    }
);

const setHeaders = (headers) => {
    httpInstance.defaults.headers = headers;
};

const addHeaders = (headers) => {
    httpInstance.defaults.headers = {
        ...httpInstance.defaults.headers,
        ...headers,
    };
};

const setBaseUrl = (url) => {
    httpInstance.defaults.baseURL = url;
};

const setToken = (t) => {
    token = t;
};

const setResponseFulfilledHandler = (handler) => {
    if (isFunction(handler)) handleResponseFulfilled = handler;
};

const setResponseRejectedHandler = (handler) => {
    if (isFunction(handler)) handleResponseRejected = handler;
};

export default httpInstance;
export {
    setHeaders,
    addHeaders,
    setBaseUrl,
    setToken,
    setResponseFulfilledHandler,
    setResponseRejectedHandler,
    token,
};
