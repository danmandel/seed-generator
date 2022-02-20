import { randomInt } from 'crypto';
import { getSeedWordByIndex } from '.';
import { wordList } from '../datastructures';


export const getRandomWord = (words = wordList): string => getSeedWordByIndex(randomInt(words.length));

export const getRandomWords = (len: number): string[] => [...new Array(len)].map((_) => getRandomWord());
