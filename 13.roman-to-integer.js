/*
 * [13] Roman to Integer
 *
 * https://leetcode-cn.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (54.00%)
 * Total Accepted:    14.6K
 * Total Submissions: 26.9K
 * Testcase Example:  '"III"'
 *
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V +
 * II 。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数
 * 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * 
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 * 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * 
 * 示例 1:
 * 
 * 输入: "III"
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: "IV"
 * 输出: 4
 * 
 * 示例 3:
 * 
 * 输入: "IX"
 * 输出: 9
 * 
 * 示例 4:
 * 
 * 输入: "LVIII"
 * 输出: 58
 * 解释: C = 100, L = 50, XXX = 30, III = 3.
 * 
 * 
 * 示例 5:
 * 
 * 输入: "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 */
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function(s) {
//     var romanNumeral = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//         H: 0
//     }
//     var arr = s.split('')
//     var sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'I') {
//             if (arr[i + 1] === 'V') {
//                 sum += 4

//                 arr[i + 1] = 'H'
//             } else if (arr[i + 1] === 'X') {
//                 sum += 9
//                 arr[i + 1] = 'H'
//             } else {
//                 sum += 1
//             }
//         } else if (arr[i] === 'X') {
//             if (arr[i + 1] === 'L') {
//                 sum += 40

//                 arr[i + 1] = 'H'
//             } else if (arr[i + 1] === 'C') {
//                 sum += 90
//                 arr[i + 1] = 'H'
//             } else {
//                 sum += 10
//             }
//         } else if (arr[i] === 'C') {
//             if (arr[i + 1] === 'D') {
//                 sum += 400

//                 arr[i + 1] = 'H'
//             } else if (arr[i + 1] === 'M') {
//                 sum += 900
//                 arr[i + 1] = 'H'
//             } else {
//                 sum += 100
//             }
//         } else {
//             sum = sum + romanNumeral[arr[i]]
//         }
//     }

//     return sum
// }
const romanToInt = s => {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let prevSymbol = ''
    return s.split('').reduce((prev, acc) => {
        const result = map[acc] > map[prevSymbol] ? -2 * map[prevSymbol] : 0
        prevSymbol = acc
        return (prev += map[acc] + result)
    }, 0)
}

