// 2667. Create Hello World Function

// 1) Using function keyword
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */



// 2) Using arrow function
/**
 * @return {Function}
 */
var createHelloWorld = () => {
    return () => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */