/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // let str = digits.join('')
    // return (Number(str) + 1 + '').split('').map(Number)
    //转数字再加会因为js的最大精确度而出错
    const n = digits.length
    // console.log(n)

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }
    if (!digits[0]) {
        digits.unshift(1)
    }
    return digits
}
console.log(plusOne([9, 9]))
