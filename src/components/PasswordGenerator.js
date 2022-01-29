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

import { generateRandomString } from '../utils/randoms';
import { copyToClipboard } from '../utils/copyToClipboard';

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
  const toastIdClipboard = 'password';

  const handleSubmit = (e) => {
    e.preventDefault();
    let generatedPassword = generateRandomString(passwordOptions);
    setFlag.on();
    setInputWidth(passwordOptions.passwordLength + 'em');
    setPassword(generatedPassword);

    setPasswordOptions({
      ...initialOptions,
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
  const copyPassword = (e) => {
    const title = 'Password copied to clipboard';
    copyToClipboard(onCopy, toast, toastIdClipboard, title);
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
              onClick={copyPassword}>
              Copy to clipboard
            </Button>
          </Box>
        ) : null}
      </Flex>
    </form>
  );
}

export default PasswordGenerator;
