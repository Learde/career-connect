import { makeHttpRequest } from "../../";

export const getJobs = async () => {
    const response = await makeHttpRequest({ url: "vacancies/open" });

    return response.data;
};
