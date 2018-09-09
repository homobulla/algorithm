/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
    let left=0;
    let right=num;

        while (left<right){
            let mid=(left+right)/2
            if (num<mid**2) {
                right=mid
            }else{
                left+=1
            }
                
       
            
            
        }
        if (left>1){
            sqrt_num=left-1
        }else {
            sqrt_num=left
        }
        return sqrt_num**2==num

}

console.log(isPerfectSquare(5))
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(3))
console.log(isPerfectSquare(1))


console.log(isPerfectSquare(3))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(6))

