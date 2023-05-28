import { makeHttpRequest } from "../../";

export const getProfile = async () => {
    const response = await makeHttpRequest({ url: "users/profile" });

    return response.data;
};
