import { getDataMapper, mapField } from "../../../lib";

export const mapPaginationParamsToServer = getDataMapper({
    per_page: mapField("perPage", Number),
    page: mapField("page", Number),
});
