// Map/Set soultion

class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName).add(callback);

    return {
      unsubscribe: () => {
        this.events.get(eventName).delete(callback);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (this.events.has(eventName)) {
      const result = [];

      for (const callback of this.events.get(eventName)) {
        result.push(callback(...args));
      }

      return result;
    } else {
      return [];
    }
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Object/Array solution

class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

    return {
      unsubscribe: () => {
        if (this.events[eventName]) {
          const index = this.events[eventName].indexOf(callback);
          if (index !== -1) {
            this.events[eventName].splice(index, 1);
          }
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (this.events[eventName] && this.events[eventName].length) {
      const result = [];

      for (let i = 0; i < this.events[eventName].length; i++) {
        result.push(this.events[eventName][i](...args));
      }
      return result;
    } else {
      return [];
    }
  }
}
