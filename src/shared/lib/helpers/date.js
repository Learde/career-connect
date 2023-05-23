export {
    parseISO,
    format,
    formatDuration,
    formatDistanceToNow,
    addSeconds,
} from "date-fns";
//export { parse as parseISODuration } from "iso8601-duration";

export const addSecondsToDuration = (duration, amount) => {
    duration.seconds += amount;
    duration.minutes += Math.floor(duration.seconds / 60);
    duration.hours += Math.floor(duration.minutes / 60);
    duration.days += Math.floor(duration.hours / 24);
    duration.weeks += Math.floor(duration.days / 7);
    duration.months += Math.floor(duration.weeks / 4);
    duration.years += Math.floor(duration.months / 12);

    if (duration.seconds > 60) {
        duration.seconds %= 60;
        duration.minutes %= 60;
        duration.hours %= 60;
        duration.days %= 24;
        duration.weeks %= 7;
        duration.months %= 4;
        duration.years %= 12;
    }
};
