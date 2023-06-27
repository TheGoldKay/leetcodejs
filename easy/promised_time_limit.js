/**
 * @param {Function} fn
 * @return {Function}
 */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args).then(resolve, reject);
        });
    }
};

var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            let timerId;

            fn(...args)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                }).finally(() => {
                    clearTimeout(timerId);
                });

            timerId = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });
    };
};
