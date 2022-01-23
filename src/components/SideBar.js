import React from 'react';
import { Accordion } from '@chakra-ui/react';
import Tools from './Tools';

function SideBar() {
  return (
    <Accordion allowToggle w='20%'>
      <Tools />
    </Accordion>
  );
}

export default SideBar;
