export const bubblesort = (arr: number[]): number[] => {
	arr = arr.slice();
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		}
	}
	return arr;
};
