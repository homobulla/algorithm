/*
 * [118] Pascal's Triangle
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (55.51%)
 * Total Accepted:    7.5K
 * Total Submissions: 13.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */

const demo = n => {
    // let a = n.join('')
    // let ret = +a + +a * 10
    // ret = `${ret}`.split('')
    // ret = ret.map(i => +i)
    // bug 超过10就出问题了 还是需要数组每一项相加
    let ret = []
    if (n.length == 1) {
        return [1, 1]
    }
    for (let i = 0; i < n.length; i++) {
        ret.push(n[i] + (n[i + 1] ? n[i + 1] : 0)) // 最后n+1项没有
    }
    ret.unshift(n[0])
    return ret
}

var generate = function(numRows) {
    // 首先需要考虑n和每一项的关系，当前项和后一项的关系是否递归
    // 每一行的个数 等于当前行数 且当前行错位10加原本等于后一项的值
    // 将每一个值变为数组
    if (numRows == 0) {
        return []
    }
    let ret = [[1]]
    if (numRows == 1) {
        return ret
    }
    for (let i = 0; i < numRows - 1; i++) {
        let list = demo(ret[i])
        ret.push(list)
    }
    return ret
    // console.log(ret)
}

// generate(5)
// demo([1, 3, 3, 1])
var generate = function(numRows) {
    let res = []
    for (let i = 1; i <= numRows; i++) {
        if (i == 1) res.push([1])
        else if (i == 2) res.push([1, 1])
        else {
            let preArr = res[res.length - 1]
            let arr = new Array(i)
            arr[0] = 1
            for (let j = 0; j < i - 2; j++) {
                arr[j + 1] = preArr[j] + preArr[j + 1]
            }
            arr[i - 1] = 1
            res.push(arr)
        }
    }

    return res
}
