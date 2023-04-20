function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextFib = arr[i - 1] + arr[i - 2];
    arr.push(nextFib);
  }
  return arr.slice(0, n);
}
