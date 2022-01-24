import { LOWER_LETTERS, UPPER_LETTERS, NUMBERS, SYMBOLS } from './constants';

function chooseChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}
export const generatePassword = (passwordOptions) => {
  const usedChars = [];
  let generatedPassword = '';
  if (passwordOptions.lower_letters) {
    usedChars.push(LOWER_LETTERS);
  }
  if (passwordOptions.upper_letters) {
    usedChars.push(UPPER_LETTERS);
  }
  if (passwordOptions.numbers) {
    usedChars.push(NUMBERS);
  }
  if (passwordOptions.symbols) {
    usedChars.push(SYMBOLS);
  }
  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    const chars = usedChars[Math.floor(Math.random() * usedChars.length)];
    generatedPassword += chooseChar(chars);
  }
  return generatedPassword;
};
