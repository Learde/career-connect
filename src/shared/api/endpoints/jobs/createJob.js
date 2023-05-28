import { makeHttpRequest } from "../../";

export const createJob = async (params) => {
    const response = await makeHttpRequest({
        url: "admin/vacancy",
        method: "post",
        data: params,
    });

    return response;
};
