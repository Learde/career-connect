import { makeHttpRequest } from "../../";

export const closeJob = async (id) => {
    const response = await makeHttpRequest({
        url: `admin/vacancy/close/${id}`,
        method: "post",
    });

    return response;
};
