import { makeHttpRequest } from "../../";

export const createTest = async (test) => {
    const response = await makeHttpRequest({
        url: "admin/test",
        method: "POST",
        data: test,
    });

    return response.data;
};
