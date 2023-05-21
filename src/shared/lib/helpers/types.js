import {
    isFunction,
    isNumber,
    isString,
    isBoolean,
    isObject,
    isNil,
    isArray,
} from "lodash";

const isPrimitive = (v) => {
    return isNumber(v) || isString(v) || isBoolean(v);
};

export {
    isNumber,
    isString,
    isBoolean,
    isFunction,
    isPrimitive,
    isNil,
    isObject,
    isArray,
};
