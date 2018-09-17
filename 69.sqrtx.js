/*
 * [69] Sqrt(x)
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (31.06%)
 * Total Accepted:    9K
 * Total Submissions: 29.1K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //二分法
    let left = 0,
        right = x,
        mid = x / 2
    while (Math.abs(mid ** 2 - x) > 0.01) {
        mid = (left + right) / 2

        if (Math.abs(mid ** 2 - right) < 0.01) {
            return mid
        } else if (mid ** 2 > x) {
            right = mid
        } else {
            left = mid
        }
    }
    // 这里是一些最后的精度问题确定
    mid = Math.round(mid) ** 2 > x ? Math.round(mid) - 1 : Math.round(mid)
    return mid
}
// console.log(mySqrt(4))
