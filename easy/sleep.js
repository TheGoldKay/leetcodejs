/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

async function sleep2(millis) {
    // could have used 'await' in place of 'return'
    return new Promise((delayresolve, reject) => {
      if (typeof millis !== 'number' || isNaN(millis)) {
        reject(new Error('Invalid argument. Expected a number.'));
      } else {
        setTimeout(delayresolve, millis);
      }
    });
  }

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */