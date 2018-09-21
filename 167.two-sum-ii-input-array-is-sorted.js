/*
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (40.84%)
 * Total Accepted:    6.5K
 * Total Submissions: 15.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     let arr = []

//     for (let i = 0; i < numbers.length; i++) {
//         let x = numbers.indexOf(target - numbers[i])
//         if (x !== -1 && x != i) {
//             arr.push(i + 1, x + 1)
//             arr[0] > arr[1] ? (arr = arr.reverse()) : 0
//             return arr
//         }
//     }
// }

var twoSum = function(numbers, target) {
    var res = []
    var k = numbers.length
    for (var i = 0; i < k; ) {
        if (numbers[i] + numbers[k - 1] < target) {
            i++
            continue
        }
        if (numbers[i] + numbers[k - 1] > target) {
            k--
            continue
        }
        if (numbers[i] + numbers[k - 1] == target) {
            res.push(i + 1)
            res.push(k)
            break
        }
    }
    return res
}
// console.log(twoSum([0, 0, 3, 4], 0))
