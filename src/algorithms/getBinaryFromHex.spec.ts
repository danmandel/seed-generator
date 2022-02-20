import { getBinaryFromHex } from './getBinaryFromHex';

test('Generates the correct binary value from hex', () => {
	const input = '27';
	const output = getBinaryFromHex(input);
	const solution = '00100111';

	expect(output).toEqual(solution);
});
