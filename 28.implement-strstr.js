/*
 * [28] Implement strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (35.60%)
 * Total Accepted:    16.3K
 * Total Submissions: 45.8K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number} s
 */

//和14题有点类似
// var strStr = function(haystack, needle) {
//     let i = 0 //循环变量
//     let n = 0
//     let hasL = haystack.length //父串长度
//     let neeL = needle.length //子串长度

//     if (neeL > hasL) {
//         //如果子串长大于父串，那么肯定不存在，返回-1
//         return -1
//     } else if (hasL == neeL) {
//         //如果相等，就对比2个字符串的内容
//         return haystack == needle ? 0 : -1
//     } else {
//         let mid = ''
//         while (i < hasL) {
//             //拼合对比的父串，i到len1
//             mid = haystack.substr(i, neeL) //每次都拿出和子串长度一样的字符串去对比
//             if (mid == needle) {
//                 return i //这里返回的就是第一次子串出现的位置，符合indexOf
//             }
//             i++
//         }
//         if (i == hasL) {
//             //如果循环到父串最后一位还是没有出现相等，那么就是-1不存在
//             return -1
//         }
//     }
// }
var strStr = function(haystack, needle) {
    let arr = [],
        index = 0
    if (!needle.length) return index
    arr = haystack.split(needle)
    if (arr.length < 2) {
        index = -1
    } else {
        index = arr[0].length
    }
    return index
}
// console.log()
