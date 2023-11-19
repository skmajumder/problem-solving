async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
// console.log(t.toLocaleString())
sleep(400).then(() => console.log(Date.now() - t));
