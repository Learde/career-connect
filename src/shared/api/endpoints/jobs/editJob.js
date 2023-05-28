import { makeHttpRequest } from "../../";

export const editJob = async (id, params) => {
    const response = await makeHttpRequest({
        url: `admin/vacancy/${id}`,
        method: "patch",
        data: params,
    });

    return response;
};
