/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for(let num of nums){
        val = fn(val, num);
    }
    return val;
};

function reduce2(nums, fn, init) {
    let val = init;
    nums.forEach(num => val = fn(val, num));
    return val;
}

var reduce3 = function(nums, fn, init) {
    if(nums.length == 0){
        return init;
    }else{
        return reduce(nums.slice(1), fn, fn(init, nums[0]));
    }
};
  