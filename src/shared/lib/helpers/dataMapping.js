import { isNil, isObject, isFunction, isArray } from "./types";
// TODO: unit tests
// Functional lens
const lens = (source, destination = source) => ({
    get: (obj) => obj[source],
    set: (val, obj) => ({ ...obj, [destination]: val }),
});
const view = (currentLens, obj) => currentLens.get(obj);
// const set = (currentLens, value, obj) => currentLens.set(value, obj);

// Functional identity function
const identity = (x) => x;

// Data mapping
export const getDataMapper = (meta) => {
    // Cash keys and lenses (using closure)
    const keys = Object.keys(meta);

    return (obj) => {
        // If transforming object is undefined or null, return null
        if (isNil(obj)) return null;

        // Replace array of keys with object with pairs of key and transformed value
        return keys.reduce(
            (result, key) => ((result[key] = meta[key](obj) ?? null), result),
            {}
        );
    };
};

// Helper function to declarative define how a field should be mapped
export const mapField = (
    name,
    mapOrMeta = identity,
    applyToElements = true
) => {
    const nameLens = lens(name);

    return (obj) => {
        // Value from original object got by lens
        const viewedValue = view(nameLens, obj);
        const isViewedValueArray = isArray(viewedValue);

        // If second argument is function, apply mapping function...
        if (isFunction(mapOrMeta)) {
            // to all values in array
            if (isViewedValueArray && applyToElements)
                return viewedValue.map(mapOrMeta);

            // to whole value (if value is not null or undefined)
            if (!isNil(viewedValue)) return mapOrMeta(viewedValue);

            return null;
        }

        // Else if second argument is object, apply recursive field mapping
        if (isObject(mapOrMeta)) {
            // Function to transform current value from original object
            const transformViewedValue = getDataMapper(mapOrMeta);

            // If original value is array, apply transforming function to all values inside
            if (isViewedValueArray && applyToElements)
                return viewedValue?.map(transformViewedValue);

            // Else if original value is object, apply transforming function to this object
            if (isObject(viewedValue)) return transformViewedValue(viewedValue);
        }

        return null;
    };
};

// Compose n arguments to one map function
export const composeFields = (names, map) => {
    const namesLenses = names.reduce((result, name) => {
        result.push(lens(name));

        return result;
    }, []);

    return (obj) => {
        const viewedValues = namesLenses.reduce((result, nameLens) => {
            result.push(view(nameLens, obj));

            return result;
        }, []);

        return map(viewedValues);
    };
};

export const mapArray = (mapper) => {
    return (array) => {
        if (!isArray(array)) return null;

        return array.map(mapper);
    };
};
