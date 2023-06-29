/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let a = await promise1;
    let b = await promise2;
    return new Promise((res, rej) => res => res(a+b))
};

var addTwoPromises2 = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then((values) => {
      const sum = values.reduce((acc, curr) => acc + curr, 0);
      return sum;
    });
      
  };

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
addTwoPromises(promise1, promise2)
