/*
 * [7] Reverse Integer
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (28.71%)
 * Total Accepted:    32.9K
 * Total Submissions: 114.4K
 * Testcase Example:  '123'
 *
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tag = 1
    if (x < 0) {
        x = -x
        tag = -1
    }
    result =
        tag *
        Number(
            `${x}`
                .split('')
                .reverse()
                .join('')
        )
    return result > 2 ** 31 - 1 || result < (-2) ** 31 ? 0 : result
}
