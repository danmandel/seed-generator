import { getSeedWordByIndex } from './index';

test('Gets the correct word from the wordList', () => {
	const input = 39;
	const output = getSeedWordByIndex(input);
	const solution = 'agent';

	expect(output).toEqual(solution);
});
