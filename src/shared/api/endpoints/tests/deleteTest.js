import { makeHttpRequest } from "../../";

export const deleteTest = async (id) => {
    const response = await makeHttpRequest({
        url: `admin/test/${id}`,
        method: "DELETE",
    });

    return response.data;
};
