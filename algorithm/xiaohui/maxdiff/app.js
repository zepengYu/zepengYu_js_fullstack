function getMaxDiff(arr) {
    // 1. 利用桶排序(计数排序) 时间复杂度N 排序
    // 2. 相邻空桶的最大值就是结果
    // newArr[0] = min 
    // newArr[] = max
    if (!arr.length) return null
    let min = max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    const newArr = new Array(max - min + 1)
    for (let i = 0; i < arr.length; i++) {
        newArr[arr[i]-min] = arr[i]
    }
    console.log(newArr)

    let result = k = 0
    for (let i = 0; i < newArr.length; i++) {
        if (!newArr[i]) {
            k++
        } else {
            if (k > result) {
                result = k
            }
            k = 0
        }
    }
    return result + 1
}
console.log(getMaxDiff([2, 6, 3, 4, 7, 9, 11]))

// 空间复杂度 N (arr) + K(newArr) O(N + K)
// 时间复杂度 O(N + K) O(3N)