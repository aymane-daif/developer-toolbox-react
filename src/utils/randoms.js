import { LOWER_LETTERS, UPPER_LETTERS, NUMBERS, SYMBOLS } from './constants';

function chooseChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}
export const generateRandomString = (stringOptions) => {
  const usedChars = [];
  let generatedString = '';
  if (stringOptions.lower_letters) {
    usedChars.push(LOWER_LETTERS);
  }
  if (stringOptions.upper_letters) {
    usedChars.push(UPPER_LETTERS);
  }
  if (stringOptions.numbers) {
    usedChars.push(NUMBERS);
  }
  if (stringOptions.symbols) {
    usedChars.push(SYMBOLS);
  }
  for (let i = 0; i < stringOptions.passwordLength; i++) {
    const chars = usedChars[Math.floor(Math.random() * usedChars.length)];
    generatedString += chooseChar(chars);
  }
  return generatedString;
};
