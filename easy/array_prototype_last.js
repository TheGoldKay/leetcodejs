Array.prototype.last = function() {
    if(!this.length){
        return -1;
    }else{
        let iter = this.values();
        let count = this.length;
        while(--count){
            iter.next();
        }
        return iter.next().value;
    }
};

Array.prototype.last2 = function() {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */