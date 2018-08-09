// 分治
//     1. 随机选择数组中的一个数A，基准 中点
//     2. 其他数字跟他比较，小于放左边，大于放右边
//     3. 递归的思想，将左边的数和右边的数重复以上两步

//     a b c 
//     a.concat(b).concat(c)
// 复杂排序
//     快排 
//     堆排序 
//     归并排序

// 执行效率
// N*logN 复杂排序
// 简单算法 冒泡 选择 插入 N2
const arr = [85, 24, 38, 45, 66, 71, 55, 96]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr // 如果数组长度小于或等于1，则直接返回数组
    }
    let pivotIndex = Math.floor(arr.length / 2) // 找到数组中间的索引，如果是浮点数，则向下取整
    // 基准点是提前排好序的
    let pivot = arr.splice(pivotIndex, 1)[0] // 找到数组中间索引的值
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)) // 利用concat拼接数组，并调用quickSort方法
}
console.log(quickSort(arr))
