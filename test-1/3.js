function problem3(input) {
    let sum = 0
  
    for (const key in input) {
        if (typeof input[key] === "object") {
            sum += problem3(input[key])
        } else if (typeof input[key] === "number" && input[key] % 2 === 0) {
            sum += input[key]
        }
    }
  
    return sum;
}
  
  // Contoh penggunaan:
const input1 = {
    outer: 2,
    input: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  
const input2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: 'car' }
}
  
console.log(problem3(input1))
console.log(problem3(input2))
  