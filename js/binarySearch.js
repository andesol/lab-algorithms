/* 
    - Linear search: O(n)
    - Binary search: O(log n)
*/

function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid

        }
        else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

export default binarySearch;