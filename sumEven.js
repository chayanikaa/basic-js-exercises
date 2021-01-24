function sumEven(arr) {
  let sum = 0;
  for (const element of arr) {
    if (element % 2 === 0) {
      sum += element;
    }
  }
  return sum;
}

console.log(sumEven([1, 2, 3, 89, 23, 90]));