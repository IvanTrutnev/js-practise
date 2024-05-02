var RandomizedSet = function () {
  this.set = [];
  this.keysMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.keysMap.has(val)) {
    return false;
  }

  this.set.push(val);
  this.keysMap.set(val, this.set.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.keysMap.has(val)) {
    return false;
  }

  const index = this.keysMap.get(val);
  const lastVal = this.set[this.set.length - 1];

  this.set[index] = lastVal;
  this.keysMap.set(lastVal, index);

  this.set.pop();
  this.keysMap.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(Math.random() * this.set.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
