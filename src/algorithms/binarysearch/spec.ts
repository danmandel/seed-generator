import { binarySearch } from './';

test('It finds the appropriate index of the target element', () => {
	const input = [0, 2, 4, 6, 8, 10, 100, 1000];
	const result = binarySearch(input, 4);
	expect(result).toBe(2);
});

test('It returns -1 for invalid arrays', () => {
	const input = [40, 0, 2, 4, 6, 8, 10, 100, 1000];
	const result = binarySearch(input, 4);
	expect(result).toBe(2);
});
