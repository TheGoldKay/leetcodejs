/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function throwError(msg){
        throw new Error(msg);
    }
    return {
        toBe: (arg) => arg === val? true: throwError("Not Equal"),
        notToBe: (arg) => arg !== val? true: throwError("Equal"),
    };
};


let a = expect(5).toBe(5); // true
let b = expect(5).notToBe(5); // throws "Equal"
console.log(a);
console.log(b);