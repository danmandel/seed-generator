import { merge } from '../merge';

/**
 * Mergesort is:
 *  - comparison based
 *  - divide and conquer
 *  - stable
 *  - best case time complexity of O(n log(n))
 *  - average case time complexity of O(n log(n))
 *  - worst case time complexity of O(n log(n))
 *  - worst case space complexity of O(n)
 *
 * @param {number[]} arr The array to sort.
 * @returns {number[]} The sorted array.
 */

export const mergesort = (arr: number[]): number[] => {
	if (arr.length < 2) return arr; // @todo is this faster than arr.length <= 1?
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	return merge(mergesort(left), mergesort(right));
};
