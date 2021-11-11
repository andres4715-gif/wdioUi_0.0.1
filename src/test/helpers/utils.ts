// Just some examples

/**
 * Get the time difference in seconds
 * @param {number} start    the time in milliseconds
 * @param {number} end      the time in milliseconds
 */
export function timeDifference (start: number, end: number) {
    const elapsed = (end - start) / 1000;
    console.log('elapsed = ', elapsed, ' seconds');
}

/**
 * Get a email with ramdom value
 * @param min
 * @param max
 * @constructor
 */
export function Emailrandom (min: number, max: number) {
    const random = min + Math.floor((max - min) * Math.random());
    return ('wdioauto' + random + '@loquesea.com');
}
