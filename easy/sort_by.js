/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let toSort = [];
    let keyPair = {};
    let sorted = [];
    for(let i = 0; i < arr.length; i++){
        let value2sort = fn(arr[i]);
        toSort.push(value2sort);
        keyPair[value2sort] = arr[i];
    }
    toSort.sort((a, b) => a - b);
    toSort.forEach((elem) => {
        sorted.push(keyPair[elem])
    });
    return sorted;
};

var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
arr = [[5,4],[10,0],[6,7],[15,1]], fn = (x) => x[0] + x[1] //[[5,4],[10,0],[6,7],[15,1]]
console.log(sortBy(arr, fn));