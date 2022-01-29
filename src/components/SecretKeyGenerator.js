import { Box, Button, Input, useClipboard, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { generateRandomString } from '../utils/randoms';

async function digestMessage(str) {
  const msgUint8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

function SecretKeyGenerator() {
  const [key, setKey] = useState('');
  const [lastKey, setLastKey] = useState(null);
  const { hasCopied, onCopy } = useClipboard(key);

  const toast = useToast();
  const toastIdClipboard = 'secret-key';

  const generateKey = async () => {
    let text = generateRandomString({
      lower_letters: true,
      upper_letters: true,
      numbers: true,
      symbols: true,
      passwordLength: 16,
    });
    let digestHex = await digestMessage(text);
    setKey(digestHex);
  };

  const copyToClipboard = (e) => {
    if (key !== lastKey) {
      setLastKey(key);

      onCopy();
      if (!toast.isActive(toastIdClipboard)) {
        toast({
          id: toastIdClipboard,
          title: 'Password copied to clipboard',
          variant: 'left-accent',
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box>
      <Button onClick={generateKey} mb={4}>
        Generate key
      </Button>
      <Input value={key} isReadOnly onClick={copyToClipboard} />
    </Box>
  );
}

export default SecretKeyGenerator;
