/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let out = x;
        for(let i = functions.length - 1; i >= 0; i--){
            out = functions[i](out);
        }
        return out;
    }
};

var compose2 = function(functions) {
    return x => functions.reduceRight((acc, f)=>f(acc), x)
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */