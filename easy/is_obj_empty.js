/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return JSON.stringify(obj).length - 2 === 0;
};

var isEmpty = function(obj) {
    return !Object.keys(obj).length;
};

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    return false; 
  };

var isEmpty = function(obj) {
    for (let el in obj)
        return false;
    return true;
};