function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[0];
        const less = arr.filter(item => item < pivot);
        const greater = arr.filter(item => item > pivot);

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

export default quickSort
