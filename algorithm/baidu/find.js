// 有
// 1. 一个二维数组 
// 2. 每一行从左到右递增，每一列从上到下递增
// 3. 完成一个函数，判断是否有此数
// target 10
// 1,2,3 10,9,8
// [
//     [1,2,3,4],
//     [5,9,10,11],
//     [13,29,39,55]
// ]

function find(target, arr) {
    let i = 0  //row
    let j = arr[i].length-1 //每行最后一个
    while (i < arr.length && j >= 0) {
        if (arr[i][j] < target) {
            i++ 
        } else if (arr[i][j] > target) {
            j--
        } else {
            return true
        }
    }

    return false
}

console.log(find(10,[
    [1,2,3,4],
    [5,9,10,11],
    [13,29,39,55]
]))