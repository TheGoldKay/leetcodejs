/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let newArr = [];
    for(let index = 0; index < arr.length; index += size){
        newArr.push(arr.slice(index, index + size));
    }
    return newArr;
};

arr = [8,5,3,2,6], size = 6
console.log(chunk(arr, size))