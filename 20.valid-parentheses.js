/*
 * [20] Valid Parentheses
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (32.48%)
 * Total Accepted:    16K
 * Total Submissions: 49.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * ((
 * ))
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var s = s.replace(/\"/g, '')
    var box = []
    // console.log(s)
    if (s.length % 2 != 0) {
        return false
    }
    if (s.length === 0) {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '{') {
            box.push('}')
        } else if (s[i] == '[') {
            box.push(']')
        } else if (s[i] == '(') {
            box.push(')')
        } else if (box.pop() != s[i] || box.length != 0) {
            // console.log(box.pop() == s[i], 'box')
            return false
        }
    }
    return box.length != 0
}
console.log(isValid('"(()("'))
console.log(isValid('""'))
console.log(isValid('"(("'))
console.log(isValid('"(]"'))
console.log(isValid('"{{)}"'))
