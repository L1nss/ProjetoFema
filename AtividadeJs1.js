const numss = [100, 50, 3, 1, 101, -2];
console.log(maximo(numss));
console.log(minimo(numss));
function maximo(nums) {
  let max = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function minimo(nums) {
  let min = nums[0];
  for (const numm of nums) {
    if (numm < min) {
      min = numm;
    }
  }
  return min;
}
