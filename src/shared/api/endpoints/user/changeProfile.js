import { makeHttpRequest } from "../../";

export const changeProfile = async (params) => {
    const response = await makeHttpRequest({
        url: "users/profile",
        method: "post",
        data: params,
    });

    return response.data;
};
