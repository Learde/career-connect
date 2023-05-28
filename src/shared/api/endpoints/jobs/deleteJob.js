import { makeHttpRequest } from "../../";

export const deleteJob = async (id) => {
    const response = await makeHttpRequest({
        url: `admin/vacancy/${id}`,
        method: "delete",
    });

    return response;
};
