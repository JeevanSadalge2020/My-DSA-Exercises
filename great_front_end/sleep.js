async function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello World");
      resolve();
    }, duration);
  });
}

function log() {
  console.log("Hello World");
}

console.log("one");
sleep(2000).then((res) => console.log(res));
// (async function () {
//   await sleep(2000);
// })();
console.log("two");
