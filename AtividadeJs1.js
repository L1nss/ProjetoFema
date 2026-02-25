const numss = [34, -12, 87, -45, 0, 19, -73, 56, -8, 91, -30, 22, -67, 14, -99, 5, -41, 78, -16, 63]
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
