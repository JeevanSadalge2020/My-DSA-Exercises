function makeCounter(initialValue = 0) {
  const counterDefault = initialValue;
  let counter = counterDefault;

  return {
    reset() {
      counter = counterDefault;
      return counter;
    },
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
  };
}

const counter_one = makeCounter(1);
const counter_five = makeCounter(5);
console.log(counter_one.increment()); // returns 6
console.log(counter_five.increment()); // what will this return?
