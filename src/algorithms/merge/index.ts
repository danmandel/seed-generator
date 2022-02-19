/**
 * A function that takes two arrays and merges them together.
 *
 * @param {number[]} left The left array.
 * @param {number[]} right The right array.
 * @returns {number[]} The merged array.
 */

export const merge = (left: number[], right: number[]): number[] => {
	const result: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex + rightIndex < left.length + right.length) {
		const leftItem = left[leftIndex];
		const rightItem = right[rightIndex];

		if (leftItem === undefined) {
			result.push(rightItem);
			rightIndex++; // @todo: is shift more performant?
		} else if (rightItem === undefined) {
			result.push(rightItem);
			rightIndex++;
		} else if (leftItem < rightItem) {
			result.push(leftItem);
			leftIndex++;
		} else {
			result.push(rightItem);
			rightIndex++;
		}
	}

	return result;
};
