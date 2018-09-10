/*
 * [14] Longest Common Prefix
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (29.10%)
 * Total Accepted:    18.7K
 * Total Submissions: 64.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let fir = strs[0]
    let num = 0
    let ret = ''
    let flag = true

    for (let i = 0; i < strs.length; i++) {
        if (strs[i][num] === fir[num] && fir[num] !== undefined) {
            if (flag && i == strs.length - 1) {
                ret += fir[num]

                num += 1
                i = 0 //再次重置循环
            }
        } else {
            flag = false
        }
    }
    return ret
}
// console.log(longestCommonPrefix(['']))
