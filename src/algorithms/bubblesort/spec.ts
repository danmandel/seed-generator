import { bubblesort } from './';
test('it sorts the array', () => {
	const input = [5, 4, 1, 0, 9, 99, 10, 100, 2];
	const solution = [0, 1, 2, 4, 5, 9, 10, 99, 100];

	expect(bubblesort(input)).toEqual(solution);
});
