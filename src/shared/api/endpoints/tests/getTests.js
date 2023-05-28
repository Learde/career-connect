import { makeHttpRequest } from "../..";

export const getTests = async () => {
    const response = await makeHttpRequest({
        url: "tests",
        method: "get",
    });

    return response.data;
};
