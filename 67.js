//给定两个二进制字符串，返回他们的和（用二进制表示）。

//输入为非空字符串且只包含数字 1 和 0。

//示例 1:
//输入: a = "11", b = "1"
// 输出: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //依旧还是不能用数学方法相加 ，js精度范围的问题
    //从后往前遍历两个给出的二进制字符串，对应位做二进制加法
    // 考虑进位的问题 2和3
    // ret 2  0   1
    //     3  1   1
    //     1  1   0
    let lenA = a.length - 1,
        lenB = b.length - 1,
        ret = '',
        add = 0 //进位
    while (lenA >= 0 || lenB >= 0) {
        let strA, strB, temp

        strA = a[lenA] ? a[lenA] : 0
        strB = b[lenB] ? b[lenB] : 0
        // console.log(strA, strB)
        temp = +strA + +strB + add
        ret = (temp % 2) + ret
        add = temp > 1 ? 1 : 0
        lenA--
        lenB--
    }

    if (add == 1) {
        ret = '1' + ret
    }
    return ret
}

console.log(addBinary('11', '1'))
