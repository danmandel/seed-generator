import { randomInt } from 'crypto';

export const getRandomBit = (): string => {
	return randomInt(10) > 5 ? '1' : '0';
};

export const getRandomBits = (len: number): string => [...new Array(len)].map((_) => getRandomBit()).join('');
