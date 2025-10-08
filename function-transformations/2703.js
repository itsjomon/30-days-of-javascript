// 2703. Return Length of Arguments Passed

// Function Expression

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */



// Alternative Solution (ES6): Arrow Function

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = (...args) => args.length;

/**
 * argumentsLength(1, 2, 3); // 3
 */