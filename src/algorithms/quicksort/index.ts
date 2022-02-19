import { partition } from '../partition';
/**
 * Quicksort is:
 *  - comparison based
 *  - not stable (in efficient implementations)
 *  - best case time complexity of O(n log(n))
 *  - average case time complexity of O(n log(n))
 *  - worst case time complexity of O(n^2)
 *  - worst case space complexity of O(log(n))
 *
 *
 * @param {Array[number]} arr The array to be sorted.
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {any}
 */

export const quicksort: Function = (arr: number[], left: number = 0, right: number = arr.length - 1): any => {
	if (arr.length <= 2) return arr;
	const index: number = partition(arr, left, right);
	if (left < index - 1) quicksort(arr, left, index - 1);
	if (index < right) quicksort(arr, index, right);
};
