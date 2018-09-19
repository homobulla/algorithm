/*
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (43.58%)
 * Total Accepted:    12.9K
 * Total Submissions: 29.6K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 *       [7,2,11,1,8,] //这种情况问题在于我的最小数和最大数并不是最优解
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 这道题想要问什么？
    // 给定一个数组，从中选择两个元素使得两个元素的差最大，
    // 且第一个元素需小于第二个元素，并且是按照顺序来选择的，即先第一个元素减去第二个元素
    // 找到最小的，在他之后选择最大的， ///////////  如果没有则第二小的  如何判断不是最小？？？无法判断
    // 从后往前循环，然后类似于53题目 ？？ 规律找不出
    // 全部循环得了 但是时间限制可能会炸
    // 果然时间炸了Memory Limit Exceeded
    if (prices.length <= 1) {
        return 0
    }

    // let arr = []
    // for (let i = prices.length - 1; i >= 0; i--) {
    //     for (let j = i; j >= 0; j--) {
    //         arr.push(prices[i] - prices[j])
    //     }
    // }

    // return Math.max.apply(Math, arr)
    // 设置最大最小值，在每一次循环时，先找到最小值，然后直接
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            if (max < prices[i] - min) {
                max = prices[i] - min
            }
        }
    }
    return max
}
console.log(maxProfit([7, 2, 11, 1, 8]))
// maxProfit([7, 2, 11, 1, 8])
