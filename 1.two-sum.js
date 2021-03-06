/*
 * [1] Two Sum
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (42.78%)
 * Total Accepted:    103.5K
 * Total Submissions: 242K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        let x = nums.indexOf(target - nums[i])
        if (x !== -1 && x != i) {
            arr.push(i, x)
            return arr
        }
    }
}
