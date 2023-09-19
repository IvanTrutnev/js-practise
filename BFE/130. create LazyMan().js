//https://bigfrontend.dev/problem/create-lazyman

// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
const ACTIONS = {
  EAT: 'eat',
  GREET: 'greet',
  SLEEP: 'sleep',
};

class LazyManClass {
  constructor(name, logFn) {
    this.name = name;
    this.logFn = logFn;
    this.tasks = [];
    this._greet();

    setTimeout(() => {
      // we need that setTimeout (also could be used queueMicrotask) to go throw all chaining operators and only after that call tasks

      this._triggerNext();
    });
  }

  _greet() {
    this.tasks.push([ACTIONS.GREET]);
    return this;
  }

  _triggerNext() {
    const task = this.tasks.shift();

    if (!task) {
      return;
    }

    const [type, payload] = task;

    switch (type) {
      case ACTIONS.GREET:
        this.logFn(`Hi, I'm ${this.name}.`);
        this._triggerNext();
        break;
      case ACTIONS.EAT:
        this.logFn(`Eat ${payload}.`);
        this._triggerNext();
        break;
      case ACTIONS.SLEEP:
        setTimeout(() => {
          const secondsText = payload > 1 ? 'seconds' : 'second';
          this.logFn(`Wake up after ${payload} ${secondsText}.`);
          this._triggerNext();
        }, payload * 1000);
        break;
    }
  }

  eat(food) {
    this.tasks.push([ACTIONS.EAT, food]);
    return this;
  }

  sleep(seconds) {
    this.tasks.push([ACTIONS.SLEEP, seconds]);
    return this;
  }

  sleepFirst(seconds) {
    this.tasks.unshift([ACTIONS.SLEEP, seconds]);
    return this;
  }
}

function LazyMan(name, logFn) {
  return new LazyManClass(name, logFn);
}

LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1);
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.

LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1);
// (after 10 seconds)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// (after 1 second)
// Wake up after 1 second.
