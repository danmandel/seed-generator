import { createHash } from 'crypto';
import { enc, SHA256 } from 'crypto-js';

export const getSHA256HashAsHex = (text: string): string => {
	if (text.length != 256) throw new Error(`Error: input text has length ${text.length}`);
	const hash = createHash('sha256');
	hash.update(text);
	return hash.digest('hex');
};

export const getSHA256HashAsHex2 = (text: string): string => {
	return SHA256(text).toString(enc.Hex);
};
