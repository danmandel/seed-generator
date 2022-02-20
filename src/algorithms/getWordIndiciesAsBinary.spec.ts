import { getWordIndiciesAsBinary } from './index';
const seedWords = [
	'amount',
	'zero',
	'boat',
	'bone',
	'ceiling',
	'cake',
	'cause',
	'cost',
	'credit',
	'cupboard',
	'dinosaur',
	'dragon',
	'drum',
	'error',
	'fault',
	'fatal',
	'fog',
	'foam',
	'hold',
	'green',
	'hold',
	'join',
	'kick',
];

test('Generates the correct binary string', () => {
	const output = getWordIndiciesAsBinary(seedWords);
	const solution = `0000100000011111111101000110001100001100101000100100111001000000100010010010000110000101001100110000011010111000111110011010000100000100001110001001100110010100111110101001110001011010010010110100000110110010001100110010011011001000111100000101111010001`;
	expect(output).toEqual(solution);
});
