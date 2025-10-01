// 2620. Counter

// 1) Using function keyword
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */



// 2) Using arrow function
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return () => n++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */