import { wordList } from '../datastructures';

const pad = (numberStr: string, length = 11): string => {
	let str = numberStr;
	while (str.length < length) str = '0' + str;
	return str;
};

export const getWordIndexAsBinary = (word: string, words = wordList): string => {
	const index = words.indexOf(word);
	if (index === -1) throw new Error(`Not a BIP39 compliant word: ${word}`);
	return pad(index.toString(2));
};

export const getWordIndiciesAsBinary = (words: string[]): string => words.map((w) => getWordIndexAsBinary(w)).join('');
