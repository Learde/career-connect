import { getDataMapper, mapField } from "../../../lib";

export const mapUserFromServer = getDataMapper({
    id: mapField("id", Number),
    isConfirmed: mapField("confirmed", Boolean),
    login: mapField("login"),
    lastVisit: mapField("last_visit"),
    registerUserAgent: mapField("register_user_agent"),
    isAdminSession: mapField("is_admin_session", Boolean),
    tokens: mapField("tokens", {
        userId: mapField("user_id", Number),
        token: mapField("token"),
        timeStart: mapField("time_start"),
        timeEnd: mapField("time_end"),
    }),
});
