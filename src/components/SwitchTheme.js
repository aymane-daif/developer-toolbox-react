import React from 'react';
import { useColorMode, Button, Icon } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function SwitchTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      className='chakra-button'
      pos='fixed'
      bottom={5}
      right={5}
      w={50}
      h={50}>
      <Icon
        as={colorMode === 'light' ? MdDarkMode : MdLightMode}
        w={30}
        h={30}
      />
    </Button>
  );
}

export default SwitchTheme;
