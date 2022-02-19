/**
 * Searches for an element in a sorted array.
 * @returns Either the index of the element or -1 if it's not found.
 */
export const binarySearch = (arr: number[], element: number, leftIdx = 0, rightIdx = arr.length - 1): number => {
	if (leftIdx > rightIdx) return -1;
	const midIdx = Math.floor((leftIdx + rightIdx) / 2); // Don't care about integer overflows
	return midIdx === element
		? midIdx
		: element < arr[midIdx]
		? binarySearch(arr, element, leftIdx, midIdx - 1)
		: binarySearch(arr, element, midIdx + 1, rightIdx);
};
