/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
    Example
    The minimum sum is and the maximum sum is
    [1 3 5 7 9]
.   The function prints
    16 24
 * @param {*} arr 
 */

function miniMaxSum(arr) {
    const compareNumericAscendingOrder = (a , b) => a - b 
    const compareNumericDescendingOrder = (a , b) => b - a
    
    const sortedArr = Array.from(arr).sort(compareNumericAscendingOrder)
    const reversedSortedArr = Array.from(arr).sort(compareNumericDescendingOrder) 
    
    const minSumArr = sortedArr.slice(0, 4)
    const maxSumArr = reversedSortedArr.slice(0, 4)
        
    const minSum = minSumArr.reduce( 
        (acc, currentValue) => acc + currentValue , 0 )    
    const maxSum = maxSumArr.reduce( 
        (acc, currentValue) => acc + currentValue , 0 )

    console.log(`${minSum} ${maxSum}`)
}