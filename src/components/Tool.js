import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
  Box,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Tool({ toolName, tools }) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {toolName}
              </Box>
              {isExpanded ? (
                <AiOutlineMinus fontSize='12px' />
              ) : (
                <AiOutlinePlus fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection='column'>
              {tools.map((t, i) => {
                return <Link key={i}>{t}</Link>;
              })}
            </Flex>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default Tool;
