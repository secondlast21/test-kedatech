function problem2(arr, input) {
    let max = 0
    let temp = 0

    if (input > arr.length) {
      return null
    }

    for (let i = 0; i < input; i++) {
      max += arr[i]
    }
    temp = max
  
    for (let i = input; i < arr.length; i++) {
      temp = temp - arr[i - input] + arr[i]
      max = Math.max(max, temp)
    }
  
    return max;
}
  
console.log(problem2([100, 200, 300, 400], 2))
console.log(problem2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(problem2([-3, 4, 0, -2, 6, -1], 2))
  