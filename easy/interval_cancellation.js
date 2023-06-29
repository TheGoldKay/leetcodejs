/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const { performance } = require('perf_hooks'); //object destructuring

var cancellable = function(fn, args, t) {
    fn(...args);
    let timeId = setInterval(() => fn(...args), t);
    let cancel = () => clearInterval(timeId);
    return cancel;
};

var cancellable2 = function(fn, args, t) {
    let stop = false;
    fn(...args);

    const startTimer = () => {
        setTimeout(() => {
            fn(...args);
            if (stop) return;
            startTimer();
        }, t)
    }

   startTimer();

    const stopF = () => {
        stop = true;
    }

    return stopF;
};

const result = []
const fn = (x) => x * 2
const args = [4], t = 20, cancelT = 110

const start = performance.now()

const log = (...argsArr) => {
    result.push({"time": Math.floor(performance.now() - start), "returned": fn(...argsArr)})
}
     
const cancel = cancellable(log, args, t);
         
setTimeout(() => {
   cancel()
   console.log(result) // [
                       //      {"time":0,"returned":8},
                       //      {"time":20,"returned":8},
                       //      {"time":40,"returned":8},           
                       //      {"time":60,"returned":8},
                       //      {"time":80,"returned":8},
                       //      {"time":100,"returned":8}
                       //  ]
}, cancelT)
