import { makeHttpRequest } from "../../";

export const getJobs = async () => {
    const response = await makeHttpRequest({ url: "vacancies" });

    return response.data;
};
