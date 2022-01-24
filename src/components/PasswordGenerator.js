import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Input,
  useToast,
  useClipboard,
  useBoolean,
  Box,
} from '@chakra-ui/react';

const LOWER_LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const UPPER_LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SYMBOLS = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '@'];

function chooseChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function PasswordGenerator() {
  const initialOptions = {
    lower_letters: false,
    upper_letters: false,
    numbers: false,
    symbols: false,
    passwordLength: 1,
  };

  const [passwordOptions, setPasswordOptions] = useState({ ...initialOptions });
  const [inputWidth, setInputWidth] = useState('0em');
  const [password, setPassword] = useState('');

  const [flag, setFlag] = useBoolean();

  const { hasCopied, onCopy } = useClipboard(password);
  const toast = useToast();
  const toastIdClipboard = Math.random();

  const generatePassword = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let generatedPsswd = generatePassword();
    setFlag.on();
    setInputWidth(passwordOptions.passwordLength + 'em');
    setPassword(generatedPsswd);

    setPasswordOptions((state) => {
      return {
        ...initialOptions,
      };
    });
  };
  const setLength = (value) => {
    setPasswordOptions((state) => {
      return {
        ...state,
        passwordLength: +value,
      };
    });
  };
  const changeValue = (e) => {
    setPasswordOptions((state) => {
      return {
        ...state,
        [e.target.name]: e.target.checked,
      };
    });
  };
  const copyToClipboard = (e) => {
    onCopy();
    if (!toast.isActive(toastIdClipboard)) {
      toast({
        id: toastIdClipboard,
        title: 'Password copied to clipboard',
        variant: 'left-accent',
        isClosable: true,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection='column' w='80%' m='auto'>
        <NumberInput
          min={1}
          defaultValue={1}
          onChange={(value) => setLength(value)}
          value={passwordOptions.passwordLength}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <CheckboxGroup>
          <Checkbox
            name='lower_letters'
            isChecked={passwordOptions.lower_letters}
            onChange={(e) => changeValue(e)}>
            Include lower letters
          </Checkbox>
          <Checkbox
            name='upper_letters'
            isChecked={passwordOptions.upper_letters}
            onChange={(e) => changeValue(e)}>
            Include upper letters
          </Checkbox>
          <Checkbox
            name='numbers'
            isChecked={passwordOptions.numbers}
            onChange={(e) => changeValue(e)}>
            Include numbers
          </Checkbox>
          <Checkbox
            name='symbols'
            isChecked={passwordOptions.symbols}
            onChange={(e) => changeValue(e)}>
            Include symbols
          </Checkbox>
        </CheckboxGroup>
        <Button type='submit'>Generate password</Button>

        {flag ? (
          <Box mx='auto' my='3'>
            <Input
              variant='flushed'
              isReadOnly
              textAlign='center'
              w={inputWidth}
              value={password}
            />
            <Button
              ml='1.5'
              colorScheme='facebook'
              variant='ghost'
              onClick={copyToClipboard}>
              Copy to clipboard
            </Button>
          </Box>
        ) : null}
      </Flex>
    </form>
  );
}

export default PasswordGenerator;
