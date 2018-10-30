/*
 * [414] Third Maximum Number
 *
 * https://leetcode-cn.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (28.29%)
 * Total Accepted:    3.2K
 * Total Submissions: 11.1K
 * Testcase Example:  '[3,2,1]'
 *
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3, 2, 1]
 * 
 * 输出: 1
 * 
 * 解释: 第三大的数是 1.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1, 2]
 * 
 * 输出: 2
 * 
 * 解释: 第三大的数不存在, 所以返回最大的数 2 .
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [2, 2, 3, 1]
 * 
 * 输出: 1
 * 
 * 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
 * 存在两个值为2的数，它们都排第二。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var paixu = arr => {
  var i = arr.length - 1
  while (i > 0) {
    var pos = 0
    for (var j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        pos = j
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    i = pos
  }

  return arr
}
var thirdMax = function(nums) {
  let arr = paixu(nums)
  let arrs = Array.from(new Set(arr))
  if (arrs.length > 2) {
    return arrs[2]
  } else {
    return arrs[0]
  }
}

// console.log(thirdMax([3, 2, 2, 1]))
