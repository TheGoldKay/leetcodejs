class Calculator {
  
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.val = value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.val += value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.val -= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.val *= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value == 0){
            throw new Error("Division by zero is not allowed");
        }else{
            this.val /= value;
            return this;
        }
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.val = this.val ** value;
        return this;
    }
      
    /** 
     * @return {number}
     */
    getResult() {
        return this.val;
    }
  }
let ans = new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
console.log(ans);