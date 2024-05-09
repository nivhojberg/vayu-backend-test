// I would prefer research outsource libraries instead if I had more time

export const validateNumber = (param: any, paramName: string): number => {
    const num = Number(param);

    if (isNaN(num)) {
        throw new Error(`Error in validation: ${paramName} must be a number`);
    }

    return num;
};

export const validateStringAsNumber = (param: any, paramName: string): number => {
    if (typeof param !== "string") {
        throw new Error(`Error in validation: invalid ${paramName}`);
    }

    return validateNumber(param, paramName);
}

export const validateString = (param: any, paramName: string): string => {
    if (typeof param !== "string") {
        throw new Error(`Error in validation: invalid ${paramName}`);
    }

    return decodeURIComponent(param);
}
