import { makeHttpRequest } from "../../";

export const editTest = async (test, id) => {
    const response = await makeHttpRequest({
        url: `admin/test/${id}`,
        method: "PATCH",
        data: test,
    });

    return response.data;
};
