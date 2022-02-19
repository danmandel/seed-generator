/**
 * A function that reorders the array in place so that all elements with values less than the pivot come before it
 * and elements with values greater than the pivot come after it.
 *
 * @param  {number[]} arr The array to be sorted.
 * @param  {number} left The number to the left of the pivot.
 * @param  {number} right The number to the right of the pivot.
 * @returns {string}
 */
export const partition: Function = (arr: number[], left: number = 0, right: number = arr.length - 1): number => {
	const pivot: number = arr[Math.floor((right + left) / 2)];
	let i: number = left;
	let j: number = right;

	while (i <= j) {
		while (arr[i] < pivot) i++;
		while (arr[j] > pivot) j--;
		if (i <= j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
			j--;
		}
	}

	return i;
};
