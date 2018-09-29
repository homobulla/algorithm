/*
 * [204] Count Primes
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (22.62%)
 * Total Accepted:    6.6K
 * Total Submissions: 28.9K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
const isOrNot = n => {
    // 质数的定义
    // 循环,一旦有符合的数，直接push。。。
    let num = 0
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

const countPrimes = n => {
    let num = 0
    for (let i = 1; i < n; i++) {
        if (isOrNot(i)) {
            num++
        }
    }
    return num
}

console.log(countPrimes(2))
