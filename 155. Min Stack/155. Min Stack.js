var MinStack = function () {
  this.stack = [];
  this.minStack = []; //each elemnt save own minimum value at current interate index
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.stack.length] = val;

  if (!this.minStack.length) {
    this.minStack[0] = val;
  } else {
    this.minStack[this.minStack.length] = Math.min(this.getMin(), val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.length = this.stack.length - 1;
  this.minStack.length = this.minStack.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
