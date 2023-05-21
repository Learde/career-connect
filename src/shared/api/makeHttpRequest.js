import httpInstance, { token } from "./config";

const makeHttpRequest = ({
    url = "/",
    method = "get",
    params = {},
    data = {},
    headers = {},
}) => {
    if (token) headers.authorization = `Bearer ${token}`;

    return httpInstance.request({
        url,
        method,
        headers,
        params,
        data,
    });
};

export default makeHttpRequest;
