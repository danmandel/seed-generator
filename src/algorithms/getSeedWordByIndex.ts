import { wordList } from '../datastructures';

export const getSeedWordByIndex = (index: number, words = wordList): string => {
	const word = words[index];
	if (!word) throw new Error(`No word exists at index: ${index}`);
	return word;
};
