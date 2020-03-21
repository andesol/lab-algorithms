// O(n^2)

function selectionSort(arr) {
    const newArr = [];
    const copyArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = getSmallest(copyArr);
        const smallest = copyArr[smallestIndex];
        copyArr.splice(smallestIndex, 1)
        newArr.push(smallest);
    }

    // *******************************
    function getSmallest(arr) {
        let smallest = arr[0];
        let smallestIndex = 0;
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }
    return newArr
}

console.log(selectionSort([32, 22, 33, 21, 545, 2]))

export default selectionSort





