import { getBinaryFromHex, getRandomBits, getRandomWords, getSHA256HashAsHex, getWordIndiciesAsBinary } from './';
import { getSeedWordByIndex } from './getSeedWordByIndex';

// const defaultConfig = {
// 	encryptionKey: 'set_secret_key',
// 	shouldSaveToFile: true,
// 	shouldSaveAsEncrypted: false,
// 	wordLength: 24,
// };

export const getSeedPhrase = (): string => {
	const seedWords = getRandomWords(23); // Can be substituted with an array of 23 handpicked words from the wordlist.
	if (new Set(seedWords).size !== 23) throw new Error('Words cannot appear more than once. Try again.');

	const stringOf253Bits = getWordIndiciesAsBinary(seedWords);
	const stringOf3Bits = getRandomBits(3);
	const hashHex = getSHA256HashAsHex(stringOf253Bits + stringOf3Bits);
	const first8BitsOfHash = getBinaryFromHex(hashHex.substring(0, 2));
	const bip39ChecksumIndex = parseInt(stringOf3Bits + first8BitsOfHash, 2);
	const checksumWord = getSeedWordByIndex(bip39ChecksumIndex);

	return [...seedWords, checksumWord].join(' ');
};
