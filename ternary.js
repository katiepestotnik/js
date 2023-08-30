//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let isJavaScriptFun = true

//ternary
//condition ? truthy : falsey
isJavaScriptFun ? console.log('heck ya!') : console.log('i\'m still learning...')

//traditional
if (isJavaScriptFun) {
    console.log('heck ya!')
} else {
    console.log('i\m still learning...')
}

const findLarger = (num1, num2) => {
    return num1 > num2 ? num1 : num2
}
console.log('with ternary:', findLarger(20, 80))

const findMax = (num1, num2) => {
    return Math.max(num1, num2)
}
console.log('with Math method:', findMax(220,88))