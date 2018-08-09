// 时间复杂度 n²
// 找到数组中最小的值放在第一位，第二小的放在第二位...
// 坑 基址查找

function selectionSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        // 如果已经选择了，就一定是有序的 i-j数已经有序
        for(let j = i; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}
const arr = [85, 24, 38, 45, 66, 71, 55, 96, 11]
console.log(selectionSort(arr))