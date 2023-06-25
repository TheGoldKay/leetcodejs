/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let mapped = [];
    arr.forEach((num, i) => mapped.push(fn(num, i)));
    return mapped;
};

var map = function(arr, fn) {
    return arr.reduce((transformedArr, element, index) => {
      transformedArr[index] = fn(element, index);
      return transformedArr;
    }, []);
};