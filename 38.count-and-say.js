/*
 * [38] Count and Say
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (44.37%)
 * Total Accepted:    9.8K
 * Total Submissions: 22.2K
 * Testcase Example:  '1'
 *
 * 报数序列是指一个整照其中的整数的顺序进数序列，按行报数，得到下一个数。其前五项如下：
 * 
 * 1.n     1
 * 2.n     11
 * 3.n     21
 * 4.n     1211
 * 5.n    111221
 * 6.n     312211
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
const demo = num => {
    let arr = []
    num += ''
    let ret = ''
    for (let i = 0; i < num.length; i++) {
        if (num[i] != num[i + 1]) {
            arr.push(num.slice(0, i + 1))

            num = num.slice(i + 1)

            i = -1 // 抵消i++
        }
    }
    // ret = arr.reduce((pre, now) => {
    //     console.log(pre, now)
    //     return pre.length + String(pre[0]) + now.length + now[0]
    // })
    for (let i = 0; i < arr.length; i++) {
        ret += String(arr[i].length) + arr[i][0]
    }
    return ret
}
console.log(demo(1211))
var countAndSay = function(n) {
    if (n === 1) {
        return '1'
    }
    let ret = 1
    for (let i = 0; i < n - 1; i++) {
        ret = demo(ret)
    }
    console.log(typeof ret)
    return ret
}
// console.log(countAndSay(4))
// demo(11)
