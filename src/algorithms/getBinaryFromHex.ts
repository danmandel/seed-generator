/*
 * https://stackoverflow.com/a/68315766/7932229
 */
export const getBinaryFromHex = (text: string) =>
	text
		.split('')
		.map((i) => parseInt(i, 16).toString(2).padStart(4, '0'))
		.join('');
